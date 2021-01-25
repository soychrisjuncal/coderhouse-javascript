function capturar () {
//console.log ("capturado");

function Persona (usuario,email,genero,nombre,dni,domicilio,localidad,telefono) {

this.usuario= usuario;
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

nuevoUsuario= new Persona(usuarioCapturar,emailCapturar,generoCapturar,nombreCapturar,dniCapturar,domicilioCapturar,localidadCapturar,telefonoCapturar);

console.log(nuevoUsuario);
ingresarDato();
}

var baseDatos = [];
function ingresarDato (){
baseDatos.push(nuevoUsuario);
console.log(baseDatos);

}


function mostrarPlanBasic() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del>Pintura (techo y paredes)</del></p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> -<del>Diseño Interiores</del></p>';
document.getElementById("mostrar-total").innerHTML = '<p id="mostrar-total" class="tarjeta-text4">' + " $ " + (valorBasic) + '</p>';
}

function mostrarPlanRegular() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - Pintura (techo y paredes)</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> -<del>Diseño Interiores</del></p>';
document.getElementById("mostrar-total").innerHTML = '<p id="mostrar-total" class="tarjeta-text4">' + " $ " + (valorRegular) + '</p>';
}

function mostrarPlanFull() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - Pintura (techo y paredes)</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores></p>';
document.getElementById("mostrar-total").innerHTML = '<p id="mostrar-total" class="tarjeta-text4">' + " $ " + (valorFull) + '</p>';

}

function mostrarPersonalizadoFlete() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del> Pintura (techo y paredes) <del></p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores></p>';
document.getElementById("mostrar-total").innerHTML = '<p id="mostrar-total" class="tarjeta-text4">' + " $ " + (valorFull - valorPintura) + '</p>';

}

function mostrarPersonalizadoFlete() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del> Pintura (techo y paredes) <del></p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores></p>';
document.getElementById("mostrar-total").innerHTML = '<p id="mostrar-total" class="tarjeta-text4">' + " $ " + (valorFull - valorPintura) + '</p>';

}

var valorFlete = parseInt(7999);
var valorPintura = parseInt(14999);
var valorInteriores = parseInt(6999);

var valorBasic = (valorFlete)
 var valorRegular = (valorFlete + valorPintura)
 var valorFull = (valorFlete + valorPintura + valorInteriores);






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
  }
}

/*
	var mostrarFlete = document.getElementById("card-text").textContent;
	document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';
}else{

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' + " " + '</p>';

}


/*
const button = event.target;
  const item = button.closest('.card');

  const itemTitle = item.querySelector('.card-title').textContent;
  const itemText = item.querySelector('.card-text').textContent;
  const itemText2 = item.querySelector('.card-text2').textContent;
  const itemText3 = item.querySelector('.card-text3').textContent;
  const itemPrice = item.querySelector('.card-text4').textContent;

 console.log(itemTitle + itemText +itemText2 + itemText3 + itemPrice);


 document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  item.querySelector('.card-text').innerHTML + '</p>';
 document.getElementById("tarjeta-text2").innerHTML = '<p id="tarjeta-text2" class="tarjeta-text2">' +  item.querySelector('.card-text2').innerHTML + '</p>';
 document.getElementById("tarjeta-text3").innerHTML = '<p id="tarjeta-text3" class="tarjeta-text3">' +  item.querySelector('.card-text3').innerHTML + '</p>';
 document.getElementById("tarjeta-text4").innerHTML = '<p id="tarjeta-text4" class="tarjeta-text4">' +  item.querySelector('.card-text4').innerHTML + '</p>';

}
*/