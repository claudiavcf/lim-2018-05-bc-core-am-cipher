alert('aqui esta mi funcion de decode y encode');

window.cipher = {
  //
  // ... window es un objeto que toda variable o funcion se vuelve global
 // const y let nunca se declaran de manera global, por tanto no se encuentra dentro del objeto window, en caso de var, si 

  //const cipher
  encode : (offset, string) => {
  string.toupperCase();
  }
};

document.getElementById('Encriptado').addEventListener('click',Encriptado)
document.getElementById('Desencriptado').onclick=Desencriptado
document.getElementById('Digito').value=0
document.getElementById('Enviar').addEventListener('click',Enviar)

function Encriptado(){
  
  //var palabra= document.getElementById("txtarea");
  //alert(palabra[0].value);

  //let desencriptado= document.getElementById("txtarea").value.toupperCase();
  let desencriptado= document.getElementById("txtarea");
  //let encriptado= document.getElementById("Encriptado");
  let dig=document.getElementById("Digito");
  let cipherArray= new Array();
  [...desencriptado].forEach(char => {
    if (char.charCodeAt() == 32){
      cipherArray.push(32);
    } else {
      charNumber = char.charCodeAt() - 65;
      cipherChar= (charNumber + parseInt(dig.value)) % 26;
      cipherArray.push(cipherChar +  65);
    }
  })

  document.getElementById("resultado").innerHTML = String.fromCharCode(...cipherArray);

}

/*function Desencriptado(){
  
  let desencriptado= document.getElementById("txtarea");
  //let encriptado= document.getElementById("Encriptado").value.toupperCase();
 // let encriptado= document.getElementById("Encriptado");
  let dig=document.getElementById("Digito");
  let cipherArray= new Array();
  [...desencriptado].forEach(char => {
    if (char.charCodeAt() == 32){
      cipherArray.push(32);
    } else {
      charNumber = char.charCodeAt() - 65;
      cipherChar= (charNumber - parseInt(dig.value));
      
      if (cipherChar > 25||cipherChar < 0) cipherChar= cipherChar + 26
      cipherChar= cipherChar % 26
      cipherArray.push(cipherChar +  65);
    }
  })

  document.getElementById("resultado").innerHTML = String.fromCharCode(...cipherArray);


}*/

function Enviar(){
  alert("Se envió el mensaje")
}


//funciones
