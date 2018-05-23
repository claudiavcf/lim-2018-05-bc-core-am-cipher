alert('aqui esta mi funcion de decode y encode');

window.cipher = {
  // ... 

  //const cipher
  encode : (offset, string) => {
  string.toupperCase();
  }
};

document.getElementById('Encriptado').onclick=Encriptado
document.getElementById('Desencriptado').onclick=Desencriptado
document.getElementById('Enviar').onclick=Enviar

function Encriptado(){
  
  //var palabra= document.getElementById("txtarea");
  //alert(palabra[0].value);

  var palabra= document.getElementById("txtarea").value;
  alert(palabra)
}

function Desencriptado(){
  alert("Se realizó el desencriptado")
}

function Enviar(){
  alert("Se envió el mensaje")
}


//funciones
