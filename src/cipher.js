window.cipher = {
	encode: (offset, txtarea) => {
		//let es una variable que va cambiando, a inicio " " luego se agrega texto
		//const es una variable ,cuando guardas una formula en esa variable
		let resultadoCifrado = '';
		let codigoCaracter;
		let nuevoCodigo;
		let caracterCifrado;

		for (let indice = 0; indice < txtarea.length; indice++) {
			codigoCaracter = txtarea.toUpperCase().charCodeAt(indice); //obtiene letra  y lo convierte a numero
			if (codigoCaracter == 32) {
				caracterCifrado = " ";
				resultadoCifrado = resultadoCifrado + caracterCifrado;
			} else {
				nuevoCodigo = (codigoCaracter - 65 + offset) % 26 + 65; //suma el numero convertido con el offset
				caracterCifrado = String.fromCharCode(nuevoCodigo); //convierte el nuevo numero a letra
				resultadoCifrado = resultadoCifrado + caracterCifrado;
			}
		}
		return resultadoCifrado;
	},

	decode: (offset, txtarea) => {
		let resultadoDescifrado = '';
		let codigoLetraActual;
		let codigoLetraAnterior;
		let letraAnterior;

		for (let indice = 0; indice < txtarea.length; indice++) {
			codigoLetraActual = txtarea.toUpperCase().charCodeAt(indice); //obtiene letra y convierte a numero
			if (codigoLetraActual == 32) {
				letraAnterior = " ";
				resultadoDescifrado = resultadoDescifrado + letraAnterior;
			} else {
				codigoLetraAnterior = (codigoLetraActual + 65 - offset) % 26 + 65; //resta el numero convertido con el offset
				letraAnterior = String.fromCharCode(codigoLetraAnterior); //convierte el numero a letra
				resultadoDescifrado = resultadoDescifrado + letraAnterior;
			}
		}
		return resultadoDescifrado;
	},

	createCipherWithOffset: ()=>{
		return;
	}

}
