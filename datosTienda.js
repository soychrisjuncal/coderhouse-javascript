
$( document ).ready(function() {

  $('#formulario').hide();
//     $('#myModal').modal('toggle')
});


// e.preventDefault(); //Sirve para frenar la propagación del click en un (recargar pagina)
   
    // $('html, body').animate({
    //     scrollTop: $("#saludoUsuario").offset().top  
    // }, 1000);



document.querySelector('#registroToggle').addEventListener('click', mostrarForm);
function mostrarForm(e){
  e.preventDefault();
  $('#formulario').fadeToggle();


}
//VALIDACION DE INPUTS DE REGISTRO

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  domicilio: /^[a-zA-Z0-9\s]{1,40}$/, // Letras y espacios, numeros.
  localidad: /^[a-zA-Z0-9\s]{1,40}$/ // Letras y espacios, numeros.
}

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
  domicilio: false,
  localidad: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, 'usuario');
    break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
    case "password":
      validarCampo(expresiones.password, e.target, 'password');
      validarPassword2();
    break;
    case "password2":
      validarPassword2();
    break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
    break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono');
    break;
    case "domicilio":
      validarCampo(expresiones.domicilio, e.target, 'domicilio');
    break;
    case "localidad":
      validarCampo(expresiones.localidad, e.target, 'localidad');
    break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
}

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');

  if(inputPassword1.value !== inputPassword2.value){
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos['password'] = false;
  } else {
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos['password'] = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const terminos = document.getElementById('terminos');
  if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && campos.domicilio && campos.localidad && terminos.checked ){
  
capturar();
    

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');

  formulario.reset();
  location.reload();

    });
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }
});



// ESTA FUNCION CAPTURA EL REGISTRO DEL USUARIO.
// document.querySelector('#formulario__btn').addEventListener('click', capturar)
function capturar () {

// console.log(e);

//FUNCION CONSTRUCTORA DE UN OBJETO PERSONA PARA CREAR USUARIOS

function Persona (usuario,nombre,password,correo,telefono,domicilio,localidad) {

this.usuario= usuario;
this.nombre= nombre;
this.password= password;

this.correo = correo;
this.telefono= telefono;
this.domicilio = domicilio;
this.localidad= localidad;

}

// var usuarioCapturar = document.getElementById("usuario").value;
var usuario = $("#usuario").val();
var nombre = $("#nombre").val();
//console.log(nombreCapturar);
var password = $("#password").val();
// var contrasenaCapturar = document.getElementById("pass").value;
//console.log(nombreCapturar);
// var emailCapturar = document.getElementById("email").value;
// //console.log(nombreCapturar);
// var generoCapturar = document.getElementById("genero").value;
// //console.log(generoCapturar);
// var nombreCapturar = document.getElementById("nombre").value;
// //console.log(nombreCapturar);
// var dniCapturar = document.getElementById("dni").value;
// //console.log(dniCapturar);
// var domicilioCapturar = document.getElementById("domicilio").value;
// //console.log(nombreCapturar);
// var localidadCapturar = document.getElementById("localidad").value;
// //console.log(nombreCapturar);
// var telefonoCapturar = document.getElementById("telefono").value;
// //console.log(nombreCapturar);

var correo = $("#correo").val();
// var generoCapturar = $("#genero").val();

// var dniCapturar = $("#dni").val();
// var domicilioCapturar = $("#domicilio").val();
// var localidadCapturar = $("#localidad").val();
var telefono = $("#telefono").val();
var domicilio = $("#domicilio").val();
var localidad = $("#localidad").val();

nuevoUsuario = new Persona(usuario,nombre,password,correo,telefono,domicilio,localidad);

// console.log(nuevoUsuario);
ingresarDato();
}

//FUNCION PARA INGRESAR EL OBJETO USUARIO A UN ARRAY A UN LOCALSTORAGE Y A UN SESSION STORAGE, PARA QUE PUEDA CERRAR SESION Y VOLVER A ABRIRLA.

var baseDatos = [];

function ingresarDato (){

  baseDatos.push(nuevoUsuario);
  localStorage.setItem("Usuario", JSON.stringify(nuevoUsuario));
sessionStorage.setItem("Usuario", JSON.stringify(nuevoUsuario));

baseDatos.push(JSON.parse(sessionStorage.getItem("Usuario")));
console.log(baseDatos);
localStorage.setItem("Usuario", JSON.stringify(JSON.parse(sessionStorage.getItem("Usuario"))));
sessionStorage.setItem("Usuario", JSON.stringify(JSON.parse(sessionStorage.getItem("Usuario"))));



}

// UNA VEZ QUE SE REGISTRA EL USARIO DESAPARECE LA OPCION DE REGISTRO Y LOGIN Y APARECE EL NOMBRE DEL USUARIO EN DISTINTAS PARTES DEL DOM.

if ( !localStorage.getItem("Usuario", JSON.stringify('Usuario'))) {
  console.log("hola");


var mostrarRegistro= $("#registro")[0];
mostrarRegistro.style.display='block';

  $("#formulario").show();

var saludoUsuario= $("#saludoUsuario")[0];
saludoUsuario.style.display='none';

// MENU USUARIO EN EL DOM EN CASO DE NO HABER INICIADO SESION.

const menuContenedor = document.querySelector('#contenedorMenu')

  let div = document.createElement('div')
  div.classList.add('dropdown-menu')
    div.innerHTML = ` <form id="forMenu"  class="px-4 py-3">


    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Nombre de Usuario</label>
      <input id="usuarioLogin" type="text" name="username" class="form-control" placeholder="Nombre de Usuario o Mail">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input id="passLogin" type="password" name="pass" class="form-control" placeholder="Ingrese su contraseña">
    </div>
    
    <button type="submit" class="btn btn-primary" onclick="traerDatos()">LOGUEATE</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Eres Nuevo? REGISTRATE</a>
 
`

menuContenedor.appendChild(div)


}else{

console.log("pepe");
      var mostrarRegistro= $("#registro")[0];
mostrarRegistro.style.display='none';

 $("#formulario").hide();

var saludoUsuario= $("#saludoUsuario")[0];
saludoUsuario.style.display='block';


$("#tarjeta-title").html('<h5 id="tarjeta-title" class="tarjeta-title">' + JSON.parse(localStorage.getItem("Usuario")).nombre + ",  " + 'Su Presupuesto Total es</h5>'
) 
$("#saludoUsuario").html('<p id="saludoUsuario" >' + "Bienvenid@  " +  JSON.parse(localStorage.getItem("Usuario")).nombre + '</p>')
$("#dropdownMenu2").html('<button class="btn btn-secondary bg-none" type="button" id="dropdownMenu2" aria-haspopup="true" aria-expanded="false"> <img id="logoUsuario" src="img/logoUsuario.png">' + JSON.parse(localStorage.getItem("Usuario")).nombre + '</button>'
 )  

// MENU USUARIO EN EL DOM EN CASO DE SI HABER INICIADO SESION.

 const menuContenedor = document.querySelector('#contenedorMenu')

  let div = document.createElement('div')
  div.classList.add('dropdown-menu')
    div.innerHTML = ` <form id="forMenu" class="px-4 py-3" >

    <div class="form-group">
      <h2 class="forMenu_h2">Conectad@<i id="iconON" class="fas fa-dot-circle"></i></h2>
    </div>
    <hr>
    <div class="form-group">
      <label  for="exampleDropdownFormEmail1">Nombre</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).nombre }</p>
    </div>
     <hr>
    </div>
     <div class="form-group">
      <label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido</label>
      <p></p>
    </div>

    <div class="form-group">
      <label id="totalLogin" for="exampleDropdownFormPassword1"  >Total</label>
      <p></p>
    </div>
       <div class="form-group">
      <label id="totalDescLogin" for="exampleDropdownFormPassword1"style="display: none;">Desc.</label>
      <p></p>
    </div>
    <hr>
        <div class="form-group">
      <label id="totalFinalLogin" for="exampleDropdownFormPassword1"style="display: none;">Precio Final</label>
      <p></p>
    </div>
<button id="btnCerrar" type="submit" class="btn btn-primary"> CERRAR SESION </button>
    <button type="submit" class="btn btn-primary" style="display: none;">LOGUEATE</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#" style="display: none;>Eres Nuevo? REGISTRATE</a>
 `
menuContenedor.appendChild(div)


document.querySelector('#dropdownMenu2').addEventListener('click', mostrarMenu);
function mostrarMenu(e){

   // get the clicked element
  $clicked = $(e.currentTarget);
  // if the clicked element is not a descendent of the dropdown
  if ($clicked.closest('.dropdown').length === 0) {
    // close the dropdown
    $('.dropdown-menu').removeClass('open');
     $('.dropdown-menu').slideToggle();
//   }else{

  
//   $('.dropdown-menu').slideToggle();

}
}


//FORMULARIO DE RESUMEN DE COMPRA QUE SOLO SE MUESTRA SI SE INICIO SESION.

const modalContenedor = document.querySelector('#contenedor-modalFinalizar')

  let div2 = document.createElement('div')
  div2.classList.add('.finalizarModal')
    div2.innerHTML = ` 
<div class="modal fade" id="finalizarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
  <div id="modalFinalizar" class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-center">
        <h5 class="modal-title" id="exampleModalLabel d-flex justify-content-center ">Resumen de Compra</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">



      
        <img class="imgResumen" src="img/resumenCompra.png">
         
    <div class="resumen-group">
      <label>Usuario:</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).usuario }</p>
    </div>
    <div class="resumen-group">
      <label>Mail:</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).correo }</p>
    </div>

    <div class="resumen-group">
      <label>Nombre:</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).nombre }</p>
    </div>

    <div class="resumen-group">
      <label>Domicilio:</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).domicilio }</p>
    </div>
  <div class="resumen-group">
      <label>Localidad:</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).localidad }</p>
      
    </div>

    <div class="resumen-group">
      <label>telefono:</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).telefono }</p>
    </div>

     <div class="resumen-group">
      <label >Fecha a realizar los Servicios</label>
      <input style="display:block; margin:0 auto;" type="date" id="fecha" name="fecha">
    </div>

     <div class="resumen-group">
      <label id="planCompra">Servicio Elegido</label>
      <p></p>
    </div>

    <div class="resumen-group">
      <label id="totalCompra">Total</label>
      <p></p>
    </div>
       <div class="resumen-group">
      <label id="totalDescCompra">Desc.</label>
      <p></p>
    </div>
        <div class="resumen-group">
      <label id="totalFinalCompra">Precio Final</label>
      <p></p>
    </div>




      </div>
      <div class="modal-footer justify-content-center" >
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
        <button type="button" id="botonConfirmarCompra" class="btn btn-primary" type="reset">Finalizar Compra</button>
      </div>
    </div>
  </div>
</div>
</div> `


modalContenedor.appendChild(div2);

var usuarioUsuario = JSON.parse(localStorage.getItem("Usuario")).usuario;
var passUsuario = JSON.parse(localStorage.getItem("Usuario")).contrasena;





 }

 // MENSAJE ERROR EN CASO DE NO HABER INICIADO SESION A LA HORA DE QUERER FINALIZAR LA COMPRA.

document.querySelector('#btnFInalizar').addEventListener('click', finalizarCompra);
function finalizarCompra () {

if ( !localStorage.getItem("Usuario", JSON.stringify('Usuario'))) {

  alert("No estas registrado");

  $("#finalizarCompra").hide();
}
}


// }else{

// const modalContenedor = document.querySelector('#contenedor-modalFinalizar')

//   let div = document.createElement('div')
//   div.classList.add('.finalizarModal')
//     div.innerHTML = ` 
// <div class="modal fade" id="finalizarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Resumen de Compra</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
        
//     <div class="form-group">
//       <label>Usuario</label>
//       <p>${JSON.parse(localStorage.getItem("Usuario")).usuario }</p>
//     </div>
//     <div class="form-group">
//       <label>Mail</label>
//       <p>${JSON.parse(localStorage.getItem("Usuario")).correo }</p>
//     </div>

//     <div class="form-group">
//       <label>Nombre</label>
//       <p>${JSON.parse(localStorage.getItem("Usuario")).nombre }</p>
//     </div>

//     <div class="form-group">
//       <label>Domicilio</label>
//       <p>${JSON.parse(localStorage.getItem("Usuario")).domicilio }</p>
//     </div>
//   <div class="form-group">
//       <label>localidad</label>
//       <p>${JSON.parse(localStorage.getItem("Usuario")).localidad }</p>
//     </div>

//     <div class="form-group">
//       <label>telefono</label>
//       <p>${JSON.parse(localStorage.getItem("Usuario")).telefono }</p>
//     </div>

//      <div class="form-group">
//       <label>Fecha a realizar los Servicios</label>
//       <input type="date" id="fecha" name="fecha">
//     </div>

//      <div class="form-group">
//       <label id="planCompra">Servicio Elegido</label>
//       <p></p>
//     </div>

//     <div class="form-group">
//       <label id="totalCompra">Total</label>
//       <p></p>
//     </div>
//        <div class="form-group">
//       <label id="totalDescCompra">Desc.</label>
//       <p></p>
//     </div>
//         <div class="form-group">
//       <label id="totalFinalCompra">Precio Final</label>
//       <p></p>
//     </div>





//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
//         <button type="button" id="botonSesion" class="btn btn-primary" type="reset">Finalizar Compra</button>
//       </div>
//     </div>
//   </div>
// </div>
// </div> `


// modalContenedor.appendChild(div)

// var usuarioUsuario = JSON.parse(localStorage.getItem("Usuario")).usuario;
// var correoUsuario = JSON.parse(localStorage.getItem("Usuario")).correo;

// cambioAmbientes();

// }

// }

//FUNCION PARA INGRESAR POR LOGIN, SE PUEDE INGRESAR A TRAVES DEL SESSION STORAGE REGISTRADO O A TRAVES DEL USUARIO ADMIN.

function ingresarDatoLogin (){


baseDatos.push(JSON.parse(sessionStorage.getItem("Usuario")));
console.log(baseDatos);
localStorage.setItem("Usuario", JSON.stringify(JSON.parse(sessionStorage.getItem("Usuario"))));
sessionStorage.setItem("Usuario", JSON.stringify(JSON.parse(sessionStorage.getItem("Usuario"))));
JSON.parse(sessionStorage.getItem("Usuario"));




}


var datosEjemplo = '{"usuario":"admin","contrasena":"admin","email":"admin@gmail.com","genero":"Masculino","nombre":"admin","dni":"34537647","domicilio":"Craig 882","localidad":"CABA","telefono":"1530540430"}';

var datosSesion = JSON.parse(datosEjemplo);





document.querySelector('#botonSesion').addEventListener('click', traerDatos)
function traerDatos(){ 




var usuarioLogin = document.getElementById("usuarioLogin")
//console.log(nombreCapturar);
var contrasenaLogin = document.getElementById("passLogin")
// console.log(datosSesion);


if ( usuarioLogin.value == JSON.parse(sessionStorage.getItem("Usuario")).usuario ) {

console.log("Ingreso Correcto")

var mostrarRegistro= $("#registro")[0];
mostrarRegistro.style.display='none';

var saludoUsuario= $("#saludoUsuario")[0];
saludoUsuario.style.display='block';

ingresarDatoLogin()


}else  {

console.log("Ingreso INCORRECTO")


}



}










//ARRAYS QUE CONTIENEN EL NOMBRE DEL SERVICIO, EL VALOR NOMINAL Y LOS VALORES CON DESCUENTO
var flete = ["Flete completo (traslado y despacho)", valorFlete, valorDescFlete, valorFleteConDesc];
var pintura = ["Pintura (techo y paredes)", valorPintura, valorDescPintura, valorPinturaConDesc];
var interiores = ["Diseño Interiores", valorInteriores, valorDescInteriores, valorInteriores];



//CREE UNA FUNCION QUE SE EJECUTA CON UN EVENTO ON CLICK PARA CADA UNA DE LAS OPCIONES, TANTO LOS PLANES DE SERVICIO EN COMBO COMO LA OPCION PERSONALIZADA A TRAVES DE LOS INPUT CHECKBOX
//TAMBIEN EN ESTA FUNCION SE GUARDA EN UN LOCAL STORAGE EL SERVICIO ELEGIDO.

baseDatosServicios = [];


document.querySelector('#btnBasic').addEventListener('click', mostrarPlanBasic, function(event){
  event.preventDefault()
});
function mostrarPlanBasic() {

; //Sirve para frenar la propagación del click en un (recargar pagina)
   
  
    $('html, body').animate({
        scrollTop: $("#card-Resumen").offset().top  
    }, 1000);




// document.getElementById("toogle").checked = true; document.getElementById("toogle2").checked = false; document.getElementById("toogle3").checked = false;
var arraysPlanBasic = [document.querySelector("#toogle").checked = true , document.querySelector("#toogle2").checked = false , document.querySelector("#toogle3").checked = false ]
baseDatosServicios.push(arraysPlanBasic);
console.log(arraysPlanBasic);
localStorage.setItem("Servicios1", JSON.stringify(arraysPlanBasic));
sessionStorage.setItem("Servicios1", JSON.stringify(arraysPlanBasic));
JSON.parse(localStorage.getItem("Servicios1"))
JSON.parse(sessionStorage.getItem("Servicios1"))



$("#tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>');
$("#tarjeta-text2").html ( '  <p class="card-text2"> - <del>' + pintura[0] + '</del></p>');
$("#tarjeta-text3").html ( ' <p class="card-text3"> -<del>' + interiores[0] + '</del></p>');

value = parseInt($('#ambiente').val());

cambioAmbientes();
inicio();


}



document.querySelector('#btnRegular').addEventListener('click', mostrarPlanRegular, function(event){
  event.preventDefault()
});
function mostrarPlanRegular() {

  $('html, body').animate({
        scrollTop: $("#card-Resumen").offset().top  
    }, 1000);

var arraysPlanRegular = [document.querySelector("#toogle").checked = true , document.querySelector("#toogle2").checked = true , document.querySelector("#toogle3").checked = false ]
baseDatosServicios.push(arraysPlanRegular);
console.log(arraysPlanRegular);
localStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios1");
localStorage.setItem("Servicios2", JSON.stringify(arraysPlanRegular));
sessionStorage.setItem("Servicios2", JSON.stringify(arraysPlanRegular));
JSON.parse(localStorage.getItem("Servicios2"))
JSON.parse(sessionStorage.getItem("Servicios2"))



$("#tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>');
$("#tarjeta-text2").html ( '  <p class="card-text2"> ' + pintura[0] + '</p>');
$("#tarjeta-text3").html ( ' <p class="card-text3"> -<del>' + interiores[0] + '</del></p>');

value =parseInt($('#ambiente').val());

cambioAmbientes();
inicio();

}

document.querySelector('#btnFull').addEventListener('click', mostrarPlanFull, function(event){
  event.preventDefault()
});
function mostrarPlanFull() {

  $('html, body').animate({
        scrollTop: $("#card-Resumen").offset().top  
    }, 1000);


var arraysPlanFull = [document.querySelector("#toogle").checked = true , document.querySelector("#toogle2").checked = true , document.querySelector("#toogle3").checked = true ]
baseDatosServicios.push(arraysPlanFull);
console.log(arraysPlanFull);
localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
sessionStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios2");
localStorage.setItem("Servicios3", JSON.stringify(arraysPlanFull));
sessionStorage.setItem("Servicios3", JSON.stringify(arraysPlanFull));
JSON.parse(localStorage.getItem("Servicios3"))
JSON.parse(sessionStorage.getItem("Servicios3"))



$("#tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>');;
$("#tarjeta-text2").html ( '  <p class="card-text2"> ' + pintura[0] + '</p>');
$("#tarjeta-text3").html ( ' <p class="card-text3"> ' + interiores[0] + '</p>');

value =parseInt($('#ambiente').val());

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoFlete() {

var arraysPersonalizadoFlete = [document.querySelector("#toogle").checked = true , document.querySelector("#toogle2").checked = false , document.querySelector("#toogle3").checked = true ]
baseDatosServicios.push(arraysPersonalizadoFlete);
console.log(arraysPersonalizadoFlete);
localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
sessionStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios2");
sessionStorage.removeItem("Servicios3");
localStorage.setItem("Servicios4", JSON.stringify(arraysPersonalizadoFlete));
sessionStorage.setItem("Servicios4", JSON.stringify(arraysPersonalizadoFlete));
JSON.parse(localStorage.getItem("Servicios4"))
JSON.parse(sessionStorage.getItem("Servicios4"))



$("#tarjeta-text").html ('<p id="tarjeta-text" class="tarjeta-text">'  +  flete[0] + '</p>');;
$("#tarjeta-text2").html('  <p class="card-text2"> - <del> ' + pintura[0] + ' <del></p>');
$("#tarjeta-text3").html( ' <p class="card-text3"> ' + interiores[0] + '</p>');
value =parseInt($('#ambiente').val());

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoPintura1() {


var arraysPersonalizadoPintura1 = [document.querySelector("#toogle").checked = false , document.querySelector("#toogle2").checked = true , document.querySelector("#toogle3").checked = false ]
baseDatosServicios.push(arraysPersonalizadoPintura1);
console.log(arraysPersonalizadoPintura1);
localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
sessionStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios2");
sessionStorage.removeItem("Servicios3");
sessionStorage.removeItem("Servicios4");
localStorage.setItem("Servicios5", JSON.stringify(arraysPersonalizadoPintura1));
sessionStorage.setItem("Servicios5", JSON.stringify(arraysPersonalizadoPintura1));
JSON.parse(localStorage.getItem("Servicios5"))
JSON.parse(sessionStorage.getItem("Servicios5"))


$("#tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + '<del> </p>');;
$("#tarjeta-text2").html ( '  <p class="card-text2"> ' + pintura[0] + '</p>');
$("#tarjeta-text3").html ( ' <p class="card-text3"> - <del>  ' + interiores[0] + ' <del> </p>');
value =parseInt($('#ambiente').val());

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoPintura2() {

var arraysPersonalizadoPintura2 = [document.querySelector("#toogle").checked = false , document.querySelector("#toogle2").checked = true , document.querySelector("#toogle3").checked = true ]
baseDatosServicios.push(arraysPersonalizadoPintura2);
console.log(arraysPersonalizadoPintura2);
localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
localStorage.removeItem("Servicios5");
sessionStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios2");
sessionStorage.removeItem("Servicios3");
sessionStorage.removeItem("Servicios4");
sessionStorage.removeItem("Servicios5");
localStorage.setItem("Servicios6", JSON.stringify(arraysPersonalizadoPintura2));
sessionStorage.setItem("Servicios6", JSON.stringify(arraysPersonalizadoPintura2));
JSON.parse(localStorage.getItem("Servicios6"))
JSON.parse(sessionStorage.getItem("Servicios6"))


$("#tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + '<del> </p>');;
$("#tarjeta-text2").html ( '  <p class="card-text2"> ' + pintura[0] + '</p>');
$("#tarjeta-text3").html ( ' <p class="card-text3"> ' + interiores[0] + '</p>');
value =parseInt($('#ambiente').val());

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoInteriores() {

var arraysPersonalizadoInteriores = [document.querySelector("#toogle").checked = false , document.querySelector("#toogle2").checked = false , document.querySelector("#toogle3").checked = true ]
baseDatosServicios.push(arraysPersonalizadoInteriores);
console.log(arraysPersonalizadoInteriores);
localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
localStorage.removeItem("Servicios5");
localStorage.removeItem("Servicios6");
sessionStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios2");
sessionStorage.removeItem("Servicios3");
sessionStorage.removeItem("Servicios4");
sessionStorage.removeItem("Servicios5");
sessionStorage.removeItem("Servicios6");
localStorage.setItem("Servicios7", JSON.stringify(arraysPersonalizadoInteriores));
sessionStorage.setItem("Servicios7", JSON.stringify(arraysPersonalizadoInteriores));
JSON.parse(localStorage.getItem("Servicios7"))
JSON.parse(sessionStorage.getItem("Servicios7"))


$("#tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + '<del> </p>');;
$("#tarjeta-text2").html ( '  <p class="card-text2"> - <del>  ' + pintura[0] + ' <del> </p>');
$("#tarjeta-text3").html ( ' <p class="card-text3"> ' + interiores[0] + '</p>');
value =parseInt($('#ambiente').val());

cambioAmbientes();
inicio();


}

function mostrarNinguno() {

var arraysNinguno = [document.querySelector("#toogle").checked = false , document.querySelector("#toogle2").checked = false , document.querySelector("#toogle3").checked = false ]
baseDatosServicios.push(arraysNinguno);
console.log(arraysNinguno);
localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
localStorage.removeItem("Servicios5");
localStorage.removeItem("Servicios6");
localStorage.removeItem("Servicios7");
sessionStorage.removeItem("Servicios1");
sessionStorage.removeItem("Servicios2");
sessionStorage.removeItem("Servicios3");
sessionStorage.removeItem("Servicios4");
sessionStorage.removeItem("Servicios5");
sessionStorage.removeItem("Servicios6");
sessionStorage.removeItem("Servicios7");
localStorage.setItem("Servicios8", JSON.stringify(arraysNinguno));
sessionStorage.setItem("Servicios8", JSON.stringify(arraysNinguno));
JSON.parse(localStorage.getItem("Servicios8"))
JSON.parse(sessionStorage.getItem("Servicios8"))


$("#tarjeta-text").html ('<p id="tarjeta-text" class="tarjeta-text">' + "  " +'  </p>');
$("#tarjeta-text2").html ( '  <p class="card-text2">' + "  " +' </p>');
$("#tarjeta-text3").html ( ' <p class="card-text3">' + "  " +' </p>');
$("#mostrar-total1").html ('<p id="mostrar-total1" class="tarjeta-text4">' + "  " + '</p>');


cambioAmbientes();
inicio();

}


  

//FUNCION DE LA INPUT RANGE QUE CAMBIA DE AMBIENTES, AQUI SE CALCULAN LOS VALORES NOMINALES DE CADA SERVICIO POR LA CANTIDAD DE AMBIENTES ELEGIDOS, Y A LA VEZ SE CALCULA UN DESC QUE SE MUESTRA UNICAMENTE SI SE APLICA EL CODIGO CORRECTO

addEventListener('load',inicio,false);

  function inicio()
  {
    document.querySelector('#ambiente').addEventListener('click',cambioAmbientes,false);
  }


 function cambioAmbientes()
  {    
    document.querySelector('#ambientes').innerHTML=document.querySelector('#ambiente').value;


  value = parseInt(document.querySelector('#ambiente').value);

var valorFlete = 7999;
var valorDescFlete = ((valorFlete * 20) / 100);
var valorFleteConDesc = (valorFlete - valorDescFlete);
var valorPintura = (14999 * value);
var valorDescPintura = (((valorPintura) * 20) / 100);
var valorPinturaConDesc = ((valorPintura) - valorDescPintura);
var valorInteriores = (6999 * value);
var valorDescInteriores = (((valorInteriores) * 20) / 100);
var valorInterioresConDesc = ((valorInteriores) - valorDescInteriores);

var checkedFlete = checkboxFlete.checked;
var checkedPintura = checkboxPintura.checked;
var checkedInteriores = checkboxInteriores.checked;



const flete = ["Flete completo (traslado y despacho)", valorFlete, valorDescFlete, valorFleteConDesc];
const pintura = ["Pintura (techo y paredes)", valorPintura, valorDescPintura, valorPinturaConDesc];
const interiores = ["Diseño Interiores", valorInteriores, valorDescInteriores, valorInterioresConDesc];


 
  
if(checkedFlete && !checkedPintura && !checkedInteriores ){ 



document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + flete[1] +'</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + flete[2] +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + flete[3] +'</p>';
document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Basic ' + '</label>';


document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + flete[1] +'</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + flete[2] +'</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + flete[3] +'</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra">Servicio Elegido: ' + '  ' +  '  Plan Basic ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra">Total' + " $ " + flete[1] +'</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + flete[2] +'</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + flete[3] +'</label>';


}else if (checkedFlete && checkedPintura && !checkedInteriores ){
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " +  (flete[1] + pintura[1]) +  '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2])) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + pintura[3]) +'</p>';
document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Regular ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1] + pintura[1]) +'</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2])) +'</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + pintura[3]) +'</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra">Servicio Elegido: ' + '  ' +  '  Plan Regular ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" ">Total' + " $ " + (flete[1] + pintura[1]) +'</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2])) +'</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + pintura[3]) +'</label>';


}else if (checkedFlete && checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]  + (pintura[1] + interiores[1])) + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2]+ interiores[2])) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + pintura[3]+ interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Full ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1]  + (pintura[1] + interiores[1])) +'</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2]+ interiores[2])) +'</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + pintura[3]+ interiores[3]) +'</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Full ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1]  + (pintura[1] + interiores[1])) +'</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2]+ interiores[2])) +'</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + pintura[3]+ interiores[3]) +'</label>';

}else if (checkedFlete && !checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + parseInt(flete[1] + interiores[1]) + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + interiores[2])) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Flete + Interiores ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1]) + interiores[1] + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + interiores[2])) + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + interiores[3]) + '</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Flete + Interiores ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1]) + interiores[1] + '</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + interiores[2])) + '</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + interiores[3]) + '</label>';

}else if (!checkedFlete && checkedPintura && !checkedInteriores) {
  
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + pintura[1] + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + pintura[2] +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + pintura[3]  +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Pintura ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + pintura[1] + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + pintura[2] + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + pintura[3]  + '</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Pintura ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" for="exampleDropdownFormPassword1">Total' + " $ " + pintura[1] + '</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + pintura[2] + '</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + pintura[3]  + '</label>';


}else if (!checkedFlete && checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (pintura[1] + interiores[1]) + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(pintura[2] + interiores[2]) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(pintura[3] + interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Pintura + Interiores ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (pintura[1] + interiores[1]) + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt(pintura[2] + interiores[2]) + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(pintura[3] + interiores[3]) + '</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Pintura + Interiores ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" for="exampleDropdownFormPassword1">Total' + " $ " + (pintura[1] + interiores[1]) + '</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt(pintura[2] + interiores[2]) + '</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(pintura[3] + interiores[3]) + '</label>';

}else if (!checkedFlete && !checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + interiores[1] + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(interiores[2]) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Interiores ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + interiores[1] + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt(interiores[2]) + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(interiores[3]) + '</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Interiores ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" for="exampleDropdownFormPassword1">Total' + " $ " + interiores[1] + '</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt(interiores[2]) + '</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(interiores[3]) + '</label>';

}else {


document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + '  ' +  '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + '  ' +  '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + '  ' +  '</label>';

document.querySelector("#planCompra").innerHTML = '<label id="planCompra" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  ' + '</label>';

document.querySelector("#totalCompra").innerHTML = '<label id="totalCompra" for="exampleDropdownFormPassword1">Total' + " $ " + '  ' +  '</label>';
document.querySelector("#totalDescCompra").innerHTML = '<label id="totalDescCompra" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + '  ' +  '</label>';
document.querySelector("#totalFinalCompra").innerHTML = '<label id="totalFinalCompra" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + '  ' +  '</label>';

} 

aplicarDescuento();



}


//EN ESTA FUNCION SE VALIDA EL CUPON DE DESCUENTO CON UN UNICO CODIGO VALIDO, DE SER CORRECTO TE MUESTRA LOS DESCUENTOS APLICADOS, DE LO CONTRARIO LOS OCULTA.

document.querySelector('#aplicar-desc').addEventListener('click', aplicarDescuento)
function aplicarDescuento(){

value = parseInt(document.querySelector('#ambiente').value);
var codigoDesc = document.querySelector("#desc").value;
element = document.querySelector("#okCod");
elementoError = document.querySelector("#wrongCod");

mostrarTotalDescCompra = document.querySelector("#totalDescCompra")
mostrarTotalFinalCompra = document.querySelector("#totalFinalCompra")

mostrarTotalDescLogin = document.querySelector("#totalDescLogin")
mostrarTotalFinalLogin = document.querySelector("#totalFinalLogin")

mostrarDesc = document.querySelector("#mostrar-total2");
mostrarTotalDesc = document.querySelector("#mostrar-total3");
if (codigoDesc == "MOOD20") {
element.style.display='block';
elementoError.style.display='none';
mostrarDesc.style.display = 'block';
mostrarTotalDesc.style.display = 'block';
mostrarTotalDescLogin.style.display = 'block';
mostrarTotalFinalLogin.style.display = 'block';
$('#totalDescCompra').show();
$('#totalFinalCompra').show();


}else{


elementoError.style.display='block';
element.style.display='none';
mostrarDesc.style.display = 'none';
mostrarTotalDesc.style.display = 'none';
mostrarTotalDescLogin.style.display = 'none';
mostrarTotalFinalLogin.style.display = 'none';
$('#totalDescCompra').hide();
$('#totalFinalCompra').hide();
}
}


//EN ESTA FUNCION SE VALIDA LA VISIBILIDAD DEL INPUT Y EL BOTON PARA ESCRIBIR EL CODIGO DE DESCUENTO.

function mostrarInput() {
        element = $("#content");
        check = document.querySelector("#toogle4");
        mostrarDesc = document.querySelector("#mostrar-total2");
mostrarTotalDesc = document.querySelector("#mostrar-total3");
elementoError = document.querySelector("#wrongCod");

        if (check.checked) {
            $("#content").slideToggle();
            elementoError.style.display='none';
            mostrarDesc.style.display = 'none';
mostrarTotalDesc.style.display = 'none';
        }
        else {
            $("#content").slideToggle();
            elementoError.style.display='none';

mostrarDesc.style.display = 'none';
mostrarTotalDesc.style.display = 'none';

        }
    }






value = parseInt(document.querySelector('#ambiente').value);
var codigoDesc = document.querySelector("#desc").value;
element = document.querySelector("#okCod");
elementoError = document.querySelector("#wrongCod");

var valorFlete = 7999;
var valorDescFlete = ((valorFlete * 20) / 100);
var valorFleteConDesc = (valorFlete - valorDescFlete);

var valorPintura = 14999;

var valorDescPintura = (((valorPintura * value) * 20) / 100);
var valorPinturaConDesc = (valorPintura - valorDescPintura);

var valorInteriores = 6999;
var valorDescInteriores = (((valorInteriores * value) * 20) / 100);
var valorInterioresConDesc = (valorInteriores - valorDescInteriores);

var valorBasic = (valorFlete);
 var valorRegular = (valorFlete + valorPintura);
 var valorFull = (valorFlete + valorPintura + valorInteriores);



// EN ESTA FUNCION SE VALIDAN LOS CHECKBOX DE LOS SERVICIOS

var checkboxFlete = document.querySelector('#toogle');
checkboxFlete.addEventListener("change", validaCheckbox, false);
var checkboxPintura = document.querySelector('#toogle2');
checkboxPintura.addEventListener("change", validaCheckbox, false);
var checkboxInteriores = document.querySelector('#toogle3');
checkboxInteriores.addEventListener("change", validaCheckbox, false);


function validaCheckbox()
{
  var checkedFlete = checkboxFlete.checked;
  var checkedPintura = checkboxPintura.checked;
   var checkedInteriores = checkboxInteriores.checked;
  if(checkedFlete && !checkedPintura && !checkedInteriores){


    mostrarPlanBasic();

  }else if (checkedFlete && checkedPintura && !checkedInteriores) {
  	mostrarPlanRegular();
  }else if (checkedFlete && checkedPintura && checkedInteriores) {
  	mostrarPlanFull();
  }else if (checkedFlete && !checkedPintura && checkedInteriores) {
  	mostrarPersonalizadoFlete();
  }else if (!checkedFlete && checkedPintura && !checkedInteriores) {
  	mostrarPersonalizadoPintura1();
  }else if (!checkedFlete && checkedPintura && checkedInteriores) {
  	mostrarPersonalizadoPintura2();
  }else if (!checkedFlete && !checkedPintura && checkedInteriores) {
  	mostrarPersonalizadoInteriores();
    } else {
      mostrarNinguno();
   
}
}

//VALIDACION DE GUARDADO DE LOS SERVICIOS EN EL LOCAL STORAGE DEL USUARIO.


if (localStorage.getItem("Servicios1", JSON.stringify(baseDatosServicios)) || sessionStorage.getItem("Servicios1", JSON.stringify(baseDatosServicios))) {
  console.log("basic");

  mostrarPlanBasic();

} else if (localStorage.getItem("Servicios2", JSON.stringify(baseDatosServicios))) {

  localStorage.removeItem("Servicios1");

   console.log("regular");

  mostrarPlanRegular();
} else if (localStorage.getItem("Servicios3", JSON.stringify(baseDatosServicios))) {

localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");

   console.log("full");

  mostrarPlanFull();

}else if (localStorage.getItem("Servicios4", JSON.stringify(baseDatosServicios))) {

localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");

   console.log("PersonalizadoFlete");

  mostrarPersonalizadoFlete();


} else if (localStorage.getItem("Servicios5", JSON.stringify(baseDatosServicios))) {

localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
   console.log("PersonalizadoPintura1");

  mostrarPersonalizadoPintura1();

} else if (localStorage.getItem("Servicios6", JSON.stringify(baseDatosServicios))) {

localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
localStorage.removeItem("Servicios5");
   console.log("PersonalizadoPintura2");

  mostrarPersonalizadoPintura2();

} else if (localStorage.getItem("Servicios7", JSON.stringify(baseDatosServicios))) {

localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
localStorage.removeItem("Servicios5");
localStorage.removeItem("Servicios6");
   console.log("PersonalizadoInteriores");

  mostrarPersonalizadoInteriores();

} else {

localStorage.removeItem("Servicios1");
localStorage.removeItem("Servicios2");
localStorage.removeItem("Servicios3");
localStorage.removeItem("Servicios4");
localStorage.removeItem("Servicios5");
localStorage.removeItem("Servicios6");
localStorage.removeItem("Servicios7");
   console.log("Ninguno");

  mostrarNinguno();

}




// FUNCION PARA CERRAR SESION, UNA VEZ CERRADA BORRA EL LOCAL STORAGE MAS NO EL SESSION PARA VOLVER A INGRESAR.

document.querySelector('#btnCerrar').addEventListener('click', cerrarSesion)
function cerrarSesion() {


localStorage.clear()

}


