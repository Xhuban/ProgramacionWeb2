const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');

const app = express();

const port = 3008;

app.use(bodyparser.urlencoded({extended:false}));

app.set('view engine', 'ejs');

//credenciales para db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'proyecto_web',
    port: '3306'
});


//conexion a la db
db.connect(err=>{
    if(err){
        console.log(`Error al momento de hacer conexion: ${err}`);
    } else {
        console.log(`Conexion realizada :3`);
    }
});


//server inicio
app.listen(port, ()=>{
    console.log(`El servidor está en escucha desde http://localhost:${port}`)
});

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


//agregar usuario

app.post('/add',(req,res)=>{
    const {usuario,email} = req.body;
    const query = 'INSERT INTO usuarios (usuario, email) VALUE (?,?)';
    db.query(query,[usuario,email],(err,results)=>{
        if(err){
            console.error(`Error al insertar en usuarios: Codigo ${err}`);
            res.send(`Error`);
        } else {
            res.render('add', {usuarios:results});
        }
    });
});


//editar usuario

app.get('/edit/:indice',(req,res)=>{
    const {indice} = req.params;
    const query = 'SELECT * FROM usuarios WHERE indice = ?';
    db.query(query,[indice],(err,results)=>{
        if(err){
            console.error(`Error en la DB`);
            res.send(`Error en la DB`);
        } else {
            res.render('edit',{usuario:results[0]});
        }
    });
});


//eliminar usuario

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