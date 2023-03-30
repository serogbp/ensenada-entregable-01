//Tenemos las siguientes variables para un usuario:

var usuarioGuardado = "tecla";
var contrasenaGuardada = "tecla";

//Y el usuario escribe sus credenciales en un formulario.

//Podríamos comparar las credenciales introducidas por el usuario con las variables guardadas utilizando
// la siguiente función:

function validarCredenciales(usuario, contrasena) {
    if (usuario === usuarioGuardado && contrasena === contrasenaGuardada) {
      return true;
    } else {
      return false;
    }
  }

  //Esta función toma como parámetros el usuario y la contraseña introducidos por el usuario y los compara
  // con las variables usuarioGuardado y contrasenaGuardada.
  // Si coinciden, devuelve true, lo que significa que las credenciales son válidas.
  // Si no coinciden, devuelve false, lo que significa que las credenciales son inválidas.

//Para utilizar esta función en conjunto con el formulario anterior, podemos agregar un evento submit
// en el formulario que llame a la función validarCredenciales con los valores introducidos por el usuario:

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // previene que se recargue la página al enviar el formulario
    var usuario = document.querySelector('#usuario').value;
    var contrasena = document.querySelector('#contrasena').value;
    if (validarCredenciales(usuario, contrasena)) {
        window.location.href = "/pages/feed.html";
    } else {
      alert('Credenciales inválidas');
    }
  });
  //Esta función agrega un evento submit al formulario y llama a la función validarCredenciales
  // con los valores introducidos por el usuario.
  // Dependiendo del resultado de la validación, se muestra un mensaje de alerta indicando 
  //si las credenciales son válidas o no.