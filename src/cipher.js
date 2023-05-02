const cipher = {
  encode: function(offset, string) {
    let letra, respuesta = '';
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Rotamos el alfabeto [offset] lugares a la derecha
    let cifrado = alfabeto.slice(+offset);
    cifrado = cifrado + alfabeto.slice(0, offset);
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
  
  decode: function(offset, string) {
    let letra, respuesta = '';
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Rotamos el alfabeto [offset] lugares a la derecha
    let cifrado = alfabeto.slice(-offset);
    console.log(cifrado);
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

// export default cipher;

function encode () {
  const string = document.getElementById("string").value;
  const offset = parseInt(document.getElementById("offset").value);
  if (isNaN(offset)) {
    alert("El desplazamiento debe ser un número entre 0 y 26");
    return;
  }
  const respuesta = cipher.encode(offset, string);
  document.getElementById("output").value = respuesta;
}

function decode () {
  const string = document.getElementById("string").value;
  const offset = parseInt(document.getElementById("offset").value);
  if (isNaN(offset)) {
    alert("El desplazamiento debe ser un número entre 0 y 26");
    return;
  }
 const respuesta = cipher.decode(offset, string);
  document.getElementById("output").value = respuesta;
}

