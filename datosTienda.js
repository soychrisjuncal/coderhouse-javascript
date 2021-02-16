
$( document ).ready(function() {
    $('#myModal').modal('toggle')
});


// ESTA FUNCION CAPTURA EL REGISTRO DEL USUARIO.
document.querySelector('#botonCaptura').addEventListener('click', capturar)
function capturar () {
// console.log(e);

//FUNCION CONSTRUCTORA DE UN OBJETO PERSONA PARA CREAR USUARIOS

function Persona (usuario,contrasena,email,genero,nombre,dni,domicilio,localidad,telefono) {

this.usuario= usuario;
this.contrasena= contrasena;
this.email= email;
this.genero= genero;
this.nombre= nombre;
this.dni = dni;
this.domicilio= domicilio;
this.localidad= localidad;
this.telefono= telefono;
}

// var usuarioCapturar = document.getElementById("usuario").value;
var usuarioCapturar = $("#usuario").val();
//console.log(nombreCapturar);
var contrasenaCapturar = $("#pass").val();
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

var emailCapturar = $("#email").val();
var generoCapturar = $("#genero").val();
var nombreCapturar = $("#nombre").val();
var dniCapturar = $("#dni").val();
var domicilioCapturar = $("#domicilio").val();
var localidadCapturar = $("#localidad").val();
var telefonoCapturar = $("#telefono").val();

nuevoUsuario = new Persona(usuarioCapturar,contrasenaCapturar,emailCapturar,generoCapturar,nombreCapturar,dniCapturar,domicilioCapturar,localidadCapturar,telefonoCapturar);

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

var saludoUsuario= $("#saludoUsuario")[0];
saludoUsuario.style.display='none';


const menuContenedor = document.querySelector('#contenedorMenu')

  let div = document.createElement('div')
  div.classList.add('dropdown-menu')
    div.innerHTML = ` <form class="px-4 py-3">


    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
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

var saludoUsuario= $("#saludoUsuario")[0];
saludoUsuario.style.display='block';


$("#tarjeta-title").html('<h5 id="tarjeta-title" class="tarjeta-title">' + JSON.parse(localStorage.getItem("Usuario")).nombre + ",  " + 'Su Presupuesto Total es</h5>'
) 
$("#saludoUsuario").html('<p id="saludoUsuario" >' + "Bienvenid@  " +  JSON.parse(localStorage.getItem("Usuario")).nombre + '</p>')
$("#dropdownMenu2").html('<button class="btn btn-secondary bg-none" type="button" id="dropdownMenu2" aria-haspopup="true" aria-expanded="false"> <img id="logoUsuario" src="img/logoUsuario.png">' + JSON.parse(localStorage.getItem("Usuario")).nombre + '</button>'
 )  


 const menuContenedor = document.querySelector('#contenedorMenu')

  let div = document.createElement('div')
  div.classList.add('dropdown-menu')
    div.innerHTML = ` <form class="px-4 py-3">

    <div class="form-group">
      <h2>Conectad@</h2>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Nombre</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).usuario }</p>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Mail</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).usuario }</p>
    </div>
     <div class="form-group">
      <label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido</label>
      <p></p>
    </div>

    <div class="form-group">
      <label id="totalLogin" for="exampleDropdownFormPassword1">Total</label>
      <p></p>
    </div>
       <div class="form-group">
      <label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.</label>
      <p></p>
    </div>
        <div class="form-group">
      <label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>
      <p></p>
    </div>
<button id="btnCerrar" type="submit" class="btn btn-primary": none;"> CERRAR SESION </button>
    <button type="submit" class="btn btn-primary" style="display: none;">LOGUEATE</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#" style="display: none;>Eres Nuevo? REGISTRATE</a>
 `
menuContenedor.appendChild(div)

var usuarioUsuario = JSON.parse(localStorage.getItem("Usuario")).usuario;
var passUsuario = JSON.parse(localStorage.getItem("Usuario")).contrasena;





 }


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


document.querySelector('#btnBasic').addEventListener('click', mostrarPlanBasic)
function mostrarPlanBasic() {

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



document.querySelector('#btnRegular').addEventListener('click', mostrarPlanRegular)
function mostrarPlanRegular() {

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

document.querySelector('#btnFull').addEventListener('click', mostrarPlanFull)
function mostrarPlanFull() {


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


$("tarjeta-text").html ( '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + '<del> </p>');;
$("tarjeta-text2").html ( '  <p class="card-text2"> - <del>  ' + pintura[0] + ' <del> </p>');
$("tarjeta-text3").html ( ' <p class="card-text3"> ' + interiores[0] + '</p>');
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


$("tarjeta-text").html ('<p id="tarjeta-text" class="tarjeta-text">  </p>');
$("tarjeta-text2").html ( '  <p class="card-text2"> </p>');
$("tarjeta-text3").html ( ' <p class="card-text3"> </p>');
$("mostrar-total1").html ('<p id="mostrar-total1" class="tarjeta-text4">' + "  " + '</p>');


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




}else if (checkedFlete && checkedPintura && !checkedInteriores ){
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " +  (flete[1] + pintura[1]) +  '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2])) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + pintura[3]) +'</p>';
document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Regular ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1] + pintura[1]) +'</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2])) +'</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + pintura[3]) +'</label>';


}else if (checkedFlete && checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]  + (pintura[1] + interiores[1])) + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2]+ interiores[2])) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + pintura[3]+ interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Full ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1]  + (pintura[1] + interiores[1])) +'</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2]+ interiores[2])) +'</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + pintura[3]+ interiores[3]) +'</label>';

}else if (checkedFlete && !checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]) + interiores[1] + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + interiores[2])) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Flete + Interiores ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (flete[1]) + interiores[1] + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt((flete[2] + interiores[2])) + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(flete[3] + interiores[3]) + '</label>';

}else if (!checkedFlete && checkedPintura && !checkedInteriores) {
  
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + pintura[1] + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + pintura[2] +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + pintura[3]  +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Pintura ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + pintura[1] + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + pintura[2] + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + pintura[3]  + '</label>';


}else if (!checkedFlete && checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (pintura[1] + interiores[1]) + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(pintura[2] + interiores[2]) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(pintura[3] + interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Pintura + Interiores ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + (pintura[1] + interiores[1]) + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt(pintura[2] + interiores[2]) + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(pintura[3] + interiores[3]) + '</label>';

}else if (!checkedFlete && !checkedPintura && checkedInteriores) {
document.querySelector("#mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + interiores[1] + '</p>';
document.querySelector("#mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(interiores[2]) +'</p>';
document.querySelector("#mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(interiores[3]) +'</p>';

document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  Plan Personalizado Interiores ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + interiores[1] + '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + parseInt(interiores[2]) + '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + parseInt(interiores[3]) + '</label>';

}else {


document.querySelector("#planLogin").innerHTML = '<label id="planLogin" for="exampleDropdownFormPassword1">Servicio Elegido: ' + '  ' +  '  ' + '</label>';

document.querySelector("#totalLogin").innerHTML = '<label id="totalLogin" for="exampleDropdownFormPassword1">Total' + " $ " + '  ' +  '</label>';
document.querySelector("#totalDescLogin").innerHTML = '<label id="totalDescLogin" for="exampleDropdownFormPassword1">Desc.' + "- 20% OFF $ " + '  ' +  '</label>';
document.querySelector("#totalFinalLogin").innerHTML = '<label id="totalFinalLogin" for="exampleDropdownFormPassword1">Precio Final</label>' + " $ " + '  ' +  '</label>';

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

mostrarDesc = document.querySelector("#mostrar-total2");
mostrarTotalDesc = document.querySelector("#mostrar-total3");
if (codigoDesc == "MOOD20") {
element.style.display='block';
elementoError.style.display='none';
mostrarDesc.style.display = 'block';
mostrarTotalDesc.style.display = 'block';

}else{


elementoError.style.display='block';
element.style.display='none';
mostrarDesc.style.display = 'none';
mostrarTotalDesc.style.display = 'none';
}
}


//EN ESTA FUNCION SE VALIDA LA VISIBILIDAD DEL INPUT Y EL BOTON PARA ESCRIBIR EL CODIGO DE DESCUENTO.

function mostrarInput() {
        element = document.querySelector("#content");
        check = document.querySelector("#toogle4");
        mostrarDesc = document.querySelector("#mostrar-total2");
mostrarTotalDesc = document.querySelector("#mostrar-total3");
elementoError = document.querySelector("#wrongCod");
        if (check.checked) {
            element.style.display='block';
            elementoError.style.display='none';
            mostrarDesc.style.display = 'none';
mostrarTotalDesc.style.display = 'none';
        }
        else {
            element.style.display='none';
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


