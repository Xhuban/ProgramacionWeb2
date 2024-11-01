function generarQR() {
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();

    let textoQR = input1 + ',' + input2 + ',' + input3 + ',' + input4;

    if (textoQR === ',,,') {
        document.getElementById('qr').innerText = "Ingrese al menos un campo para generar el código QR";

    } else {
        document.getElementById('qr').innerText = "";

        let URLQR = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoQR);

        let imgQR = document.createElement('img');
        imgQR.src = URLQR;
        imgQR.alt = "Código QR";

        imgQR.classList.add('qr');

        document.getElementById('qr').appendChild(imgQR);
    }
}
