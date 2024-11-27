//Importación de las dependencias a usar
const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');

//Intancia de express
const app = express();

//Puerto de escucha del servidor
const port = 3008;

//Uso de bodyparser
app.use(bodyparser.urlencoded({extended:false}));

//Carpeta de archivos estáticos
app.use(express.static('public'));

//Uso de ejs para plantillas de estructura
app.set('view engine', 'ejs');

//Credenciales para la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'proyecto_web',
    port: '3306'
});


//Conexion a la base de datos
db.connect(err=>{
    if(err){
        console.log(`Error al momento de hacer conexion: ${err}`);
    } else {
        console.log(`Conexion realizada :3`);
    }
});


//Inicialización del servidor
app.listen(port, ()=>{
    console.log(`El servidor está en escucha desde http://localhost:${port}`)
});


//Indice
app.get('/',(req,res)=>{
    //Consulta a la base de datos
    const query = 'SELECT * FROM usuarios';
    //Trabajar con la conexion
    db.query(query,(err,results)=>{
        if(err){
            //mensaje de error para el usuario
            console.error(`Error al recuperar datos: ${err}`);
            res.send(`Error al recuperar datos`);
        } else {
            res.render('index', {usuarios:results});
        }
    });
});


//Agregar usuario
app.get('/add',(req,res)=>{
    res.render('add');
});

app.post('/add',(req,res)=>{
    const {usuario,email} = req.body;
    const query = 'INSERT INTO usuarios (usuario, email) VALUE (?,?)';
    db.query(query,[usuario,email],(err,results)=>{
        if(err){
            console.error(`Error al insertar en usuarios: Codigo ${err}`);
            res.send(`Error`);
        } else {
            res.redirect('/');
        }
    });
});


//Editar usuario
app.get('/edit/:indice',(req,res)=>{
    const {indice} = req.params;
    const query = 'SELECT * FROM usuarios WHERE indice = ?';
    db.query(query,[indice],(err,results)=>{
        if(err){
            console.error(`Error en la DB`);
            res.send(`Error en la DB`);
        } else {
            if (results.length > 0){
                res.render('edit',{usuario:results[0]});
            } else {
                res.send(`No se encontró al usuario con índice ${indice}`)
            }
            
        }
    });
});

app.post('/edit/:indice',(req,res)=>{
    const {usuario,email} = req.body;
    const {indice} = req.params;
    const query = 'UPDATE usuarios SET usuario = ? , email = ? WHERE indice = ?';
    db.query(query,[usuario,email,indice],(err,results)=>{
        if(err){
            console.error(`Error al editar en usuarios: Codigo ${err}`);
            res.send(`Error`);
        } else {
            res.redirect('/');
        }
    });
});


//Eliminar usuario
app.get('/delete/:indice',(req,res)=>{
    const {indice} = req.params;
    const query = 'DELETE FROM usuarios WHERE indice = ?';
    db.query(query,[indice],(err)=>{
        if(err){
            console.error(`Error en el delete`);
            res.send(`Error al eliminar`);
        } else {
            res.redirect('/');
        }
    });
});