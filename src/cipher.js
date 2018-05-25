
window.cipher = {
 
};

const Encriptado=()=>{
  

    let textoDesencriptado = document.querySelector('#txtarea').value.toUpperCase();
    let digito = document.querySelector('#Digito');
    let cipherArray = new Array();
    [...textoDesencriptado].forEach(char => {
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            cipherChar = (charNumber + parseInt(digito.value)) % 26;
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("resultado").innerHTML = String.fromCharCode(...cipherArray);

    

}

const Desencriptado=()=>{
  
  let textoEncriptado= document.querySelector('#txtarea').value.toUpperCase();
  let digito = document.querySelector('#Digito');
  let cipherArray = new Array();
  [...textoEncriptado].forEach(char => {
      if (char.charCodeAt() === 32) {
          cipherArray.push(32);
      } else {
          charNumber = char.charCodeAt() - 65;
          cipherChar = (charNumber - parseInt(digito.value));
          if (cipherChar > 25 || cipherChar < 0) cipherChar = cipherChar + 26
          cipherChar = cipherChar % 26
          cipherArray.push(cipherChar + 65);
      }
  })
  document.getElementById("resultado").innerHTML = String.fromCharCode(...cipherArray);

}

const Limpiar=()=>{
    txtarea.value = "";
   resultado.value = "";
    Digito.value = 1;
}

const Enviar=()=>{
  alert("Se envió el mensaje")
}

