const cipher = {
  encode: function(offset, string) {
    validarParametros(offset, string);
    let letra, respuesta = '';
    offset %= 26;
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Rotamos el alfabeto [offset] lugares a la derecha
    let cifrado = alfabeto.slice(+offset); //porcion del alfabeto 
    cifrado = cifrado + alfabeto.slice(0, offset); // suma la  porcion restante
    // Coge la letra del cifrado según la posición de cada letra en alfabeto
     for (let i = 0; i < string.length; i++) {
      letra = string[i]; 
      if (letra === ' ') {
        letra = ' ';
      } else {
        let indiceOriginal = alfabeto.indexOf(letra);
        letra = cifrado[indiceOriginal] || letra;
      }
      respuesta += letra;
    }
    return respuesta;
  },
  
  decode: function(offset, string) {
    validarParametros(offset, string);
    let letra, respuesta = '';
    offset %= 26;
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Rotamos el alfabeto [offset] lugares a la derecha
    let cifrado = alfabeto.slice(-offset);
    cifrado += alfabeto.slice(0, alfabeto.length - offset);
    // Coge la letra del cifrado según la posición de cada letra en alfabeto
    for (let i = 0; i < string.length; i++) {
      letra = string[i];
      if (letra === ' ') {
        letra = ' ';
      } else {
        letra = cifrado[alfabeto.indexOf(letra)] || letra;
      }
      respuesta += letra;
    }
    return respuesta;
  },

};

// INVOCO
function encode () {
  const string = document.getElementById("string").value;
  const offset = parseInt(document.getElementById("offset").value);
  const respuesta = cipher.encode(offset, string);
  document.getElementById("output").value = respuesta;
}

function decode () {
  const string = document.getElementById("string").value;
  const offset = parseInt(document.getElementById("offset").value);

 const respuesta = cipher.decode(offset, string);
  document.getElementById("output").value = respuesta;
}



function validarParametros(offset, string) {
  if (isNaN(offset)) {
    throw TypeError("Se requiere el Offset");
  }
  if (offset < 0) {
    throw TypeError("El Offset debe ser mayor que 0");
  }
  if (!string) {
    throw TypeError("Se requiere una cadena de carácteres");
  }
}

// export default cipher;
