let btnCifrar =  document.getElementById('Cifrado');
btnCifrar.addEventListener("click",() => {
    let offset = parseInt(document.getElementById("txtOffset").value);
    let txtarea = document.getElementById("txtarea").value;
    let encode = cipher.encode(offset, txtarea);
    document.getElementById("resultado").innerHTML = encode;
} );

let btnDescifrar = document.getElementById('Descifrado');
btnDescifrar.addEventListener("click",() => {
    let offset = parseInt(document.getElementById("txtOffset").value);
    let txtarea = document.getElementById("txtarea").value;
    let decode = cipher.decode(offset, txtarea);
    document.getElementById("resultado").innerHTML = decode;
});


let btnLimpiar = document.getElementById("Limpiar");
btnLimpiar.addEventListener("click",() => {
    document.getElementById("txtarea").value = "";
    

}); 

let btnEnviar = document.getElementById("Enviar");
btnEnviar.addEventListener("click",()=> {
    alert("Mensaje enviado")
});
