

// ESTA FUNCION CAPTURA EL REGISTRO DEL USUARIO.

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

var usuarioCapturar = document.getElementById("usuario").value;
//console.log(nombreCapturar);
var contrasenaCapturar = document.getElementById("pass").value;
//console.log(nombreCapturar);
var emailCapturar = document.getElementById("email").value;
//console.log(nombreCapturar);
var generoCapturar = document.getElementById("genero").value;
//console.log(generoCapturar);
var nombreCapturar = document.getElementById("nombre").value;
//console.log(nombreCapturar);
var dniCapturar = document.getElementById("dni").value;
//console.log(dniCapturar);
var domicilioCapturar = document.getElementById("domicilio").value;
//console.log(nombreCapturar);
var localidadCapturar = document.getElementById("localidad").value;
//console.log(nombreCapturar);
var telefonoCapturar = document.getElementById("telefono").value;
//console.log(nombreCapturar);

nuevoUsuario = new Persona(usuarioCapturar,contrasenaCapturar,emailCapturar,generoCapturar,nombreCapturar,dniCapturar,domicilioCapturar,localidadCapturar,telefonoCapturar);

// console.log(nuevoUsuario);
ingresarDato();
}

//FUNCION PARA INGRESAR EL OBJETO USUARIO A UN ARRAY Y A UN LOCALSTORAGE

var baseDatos = [];

function ingresarDato (){

baseDatos.push(nuevoUsuario);
console.log(baseDatos);
localStorage.setItem("Usuario", JSON.stringify(nuevoUsuario));


}

// UNA VEZ QUE SE REGISTRA EL USARIO DESAPARECE LA OPCION DE REGISTRO Y LOGIN

if ( !localStorage.getItem("Usuario", JSON.stringify('Usuario'))) {
  console.log("hola");


  var mostrarRegistro= document.getElementById("registro");
mostrarRegistro.style.display='block';

var saludoUsuario= document.getElementById("saludoUsuario");
saludoUsuario.style.display='none';





  }else{


 

 console.log("pepe");
      var mostrarRegistro= document.getElementById("registro");
mostrarRegistro.style.display='none';

var saludoUsuario= document.getElementById("saludoUsuario");
saludoUsuario.style.display='block';




document.getElementById("tarjeta-title").innerHTML = '<h5 id="tarjeta-title" class="tarjeta-title">' + JSON.parse(localStorage.getItem("Usuario")).nombre + ",  " + 'Su Presupuesto Total es</h5>'

document.getElementById("saludoUsuario").innerHTML = '<p id="saludoUsuario" >' + "Bienvenid@  " +  JSON.parse(localStorage.getItem("Usuario")).nombre + '</p>'
document.getElementById("dropdownMenu2").innerHTML = '<button class="btn btn-secondary dropdown-toggle bg-none" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img id="logoUsuario" src="img/logoUsuario.png">' + JSON.parse(localStorage.getItem("Usuario")).nombre + '</button>'
 


 const menuContenedor = document.getElementById('contenedorMenu')

  let div = document.createElement('div')
  div.classList.add('dropdown-menu')
    div.innerHTML = ` <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Nombre</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).usuario }</p>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Mail</label>
      <p>${JSON.parse(localStorage.getItem("Usuario")).usuario }</p>
    </div>
     <div class="form-group">
      <label for="exampleDropdownFormPassword1">Servicio Elegido</label>
      <p></p>
    </div>

    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Total</label>
      <p></p>
    </div>
    <button type="submit" class="btn btn-primary" style="display: none;">LOGUEATE</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#" style="display: none;>Eres Nuevo? REGISTRATE</a>
 `
menuContenedor.appendChild(div)
 }



var usuarioUsuario = JSON.parse(localStorage.getItem("Usuario")).usuario;
var passUsuario = JSON.parse(localStorage.getItem("Usuario")).contrasena;


var nombreUsuario = JSON.parse(localStorage.getItem("Usuario")).usuario;






//ARRAYS QUE CONTIENEN EL NOMBRE DEL SERVICIO, EL VALOR NOMINAL Y LOS VALORES CON DESCUENTO
var flete = ["Flete completo (traslado y despacho)", valorFlete, valorDescFlete, valorFleteConDesc];
var pintura = ["Pintura (techo y paredes)", valorPintura, valorDescPintura, valorPinturaConDesc];
var interiores = ["Diseño Interiores", valorInteriores, valorDescInteriores, valorInteriores];



//CREE UNA FUNCION QUE SE EJECUTA CON UN EVENTO ON CLICK PARA CADA UNA DE LAS OPCIONES, TANTO LOS PLANES DE SERVICIO EN COMBO COMO LA OPCION PERSONALIZADA A TRAVES DE LOS INPUT CHECKBOX

function mostrarPlanBasic() {


document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del>' + pintura[0] + '</del></p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> -<del>' + interiores[0] + '</del></p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();


}


function mostrarPlanRegular() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>';
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> ' + pintura[0] + '</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> -<del>' + interiores[0] + '</del></p>';

value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPlanFull() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> ' + pintura[0] + '</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> ' + interiores[0] + '</p>';

value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoFlete() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">'  +  flete[0] + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del> ' + pintura[0] + ' <del></p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> ' + interiores[0] + '</p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoPintura1() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + '<del> </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> ' + pintura[0] + '</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - <del>  ' + interiores[0] + ' <del> </p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoPintura2() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + ' </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> ' + pintura[0] + ' </p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> ' + interiores[0] + ' </p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoInteriores() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text"> - <del> '  +  flete[0] + ' </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del> ' + pintura[0] + ' <del> </p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> ' + interiores[0] + ' </p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();


}

function mostrarNinguno() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">  </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> </p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> </p>';
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + "  " + '</p>';


}


  

//FUNCION DE LA INPUT RANGE QUE CAMBIA DE AMBIENTES, AQUI SE CALCULAN LOS VALORES NOMINALES DE CADA SERVICIO POR LA CANTIDAD DE AMBIENTES ELEGIDOS, Y A LA VEZ SE CALCULA UN DESC QUE SE MUESTRA UNICAMENTE SI SE APLICA EL CODIGO CORRECTO

addEventListener('load',inicio,false);

  function inicio()
  {
    document.getElementById('ambiente').addEventListener('click',cambioAmbientes,false);
  }


 function cambioAmbientes()
  {    
    document.getElementById('ambientes').innerHTML=document.getElementById('ambiente').value;

  value = parseInt(document.getElementById('ambiente').value);

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



document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + flete[1] +'</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + flete[2] +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + flete[3] +'</p>';




}else if (checkedFlete && checkedPintura && !checkedInteriores ){
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " +  (flete[1] + pintura[1]) +  '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2])) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + pintura[3]) +'</p>';


}else if (checkedFlete && checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]  + (pintura[1] + interiores[1])) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + pintura[2]+ interiores[2])) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + pintura[3]+ interiores[3]) +'</p>';


}else if (checkedFlete && !checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]) + interiores[1] + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((flete[2] + interiores[2])) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(flete[3] + interiores[3]) +'</p>';

}else if (!checkedFlete && checkedPintura && !checkedInteriores) {

  
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + pintura[1] + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + pintura[2] +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + pintura[3]  +'</p>';

}else if (!checkedFlete && checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (pintura[1] + interiores[1]) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(pintura[2] + interiores[2]) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(pintura[3] + interiores[3]) +'</p>';


}else if (!checkedFlete && !checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + interiores[1] + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(interiores[2]) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(interiores[3]) +'</p>';
} 

aplicarDescuento();



}


//EN ESTA FUNCION SE VALIDA EL CUPON DE DESCUENTO CON UN UNICO CODIGO VALIDO, DE SER CORRECTO TE MUESTRA LOS DESCUENTOS APLICADOS, DE LO CONTRARIO LOS OCULTA.

function aplicarDescuento(){

value = parseInt(document.getElementById('ambiente').value);
var codigoDesc = document.getElementById("desc").value;
element = document.getElementById("okCod");
elementoError = document.getElementById("wrongCod");

mostrarDesc = document.getElementById("mostrar-total2");
mostrarTotalDesc = document.getElementById("mostrar-total3");
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
        element = document.getElementById("content");
        check = document.getElementById("toogle4");
        mostrarDesc = document.getElementById("mostrar-total2");
mostrarTotalDesc = document.getElementById("mostrar-total3");
elementoError = document.getElementById("wrongCod");
        if (check.checked) {
            element.style.display='block';
            elementoError.style.display='none';
            mostrarDesc.style.display = 'block';
mostrarTotalDesc.style.display = 'block';
        }
        else {
            element.style.display='none';
            elementoError.style.display='block';

mostrarDesc.style.display = 'none';
mostrarTotalDesc.style.display = 'none';

        }
    }






value = parseInt(document.getElementById('ambiente').value);
var codigoDesc = document.getElementById("desc").value;
element = document.getElementById("okCod");
elementoError = document.getElementById("wrongCod");

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

var checkboxFlete = document.getElementById('toogle');
checkboxFlete.addEventListener("change", validaCheckbox, false);
var checkboxPintura = document.getElementById('toogle2');
checkboxPintura.addEventListener("change", validaCheckbox, false);
var checkboxInteriores = document.getElementById('toogle3');
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
