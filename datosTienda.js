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
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();



}

function mostrarPlanRegular() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - Pintura (techo y paredes)</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> -<del>Diseño Interiores</del></p>';
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorRegular)  + '</p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPlanFull() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - Pintura (techo y paredes)</p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores></p>';
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorFull) + '</p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoFlete() {

document.getElementById("toogle").checked = true;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  document.getElementById("card-text").textContent + '</p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del> Pintura (techo y paredes) <del></p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores></p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoPintura1() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = false;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text"> - <del> Flete completo (traslado y despacho)<del> </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> -  Pintura (techo y paredes) </p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - <del>  Diseño Interiores> <del> </p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoPintura2() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = true;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text"> - <del> Flete completo (traslado y despacho)<del> </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> -  Pintura (techo y paredes) </p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores>  </p>';
value =parseInt(document.getElementById('ambiente').value);

cambioAmbientes();
inicio();

}

function mostrarPersonalizadoInteriores() {

document.getElementById("toogle").checked = false;
document.getElementById("toogle2").checked = false;
document.getElementById("toogle3").checked = true;

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text"> - <del> Flete completo (traslado y despacho)<del> </p>';;
document.getElementById("tarjeta-text2").innerHTML = '  <p class="card-text2"> - <del> Pintura (techo y paredes) <del> </p>';
document.getElementById("tarjeta-text3").innerHTML = ' <p class="card-text3"> - Diseño Interiores>  </p>';
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


  



addEventListener('load',inicio,false);

  function inicio()
  {
    document.getElementById('ambiente').addEventListener('click',cambioAmbientes,false);
  }


 function cambioAmbientes()
  {    
    document.getElementById('ambientes').innerHTML=document.getElementById('ambiente').value;

  value = parseInt(document.getElementById('ambiente').value);

var checkedFlete = checkboxFlete.checked;
  var checkedPintura = checkboxPintura.checked;
   var checkedInteriores = checkboxInteriores.checked;
if(checkedFlete && !checkedPintura && !checkedInteriores){  
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorFlete) + '</p>';

}else if (checkedFlete && checkedPintura && !checkedInteriores){
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorFlete + (valorPintura * value)) + '</p>';


}else if (checkedFlete && checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorFlete + (valorPintura + valorInteriores) * value) + '</p>';


}else if (checkedFlete && !checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorFlete) + (valorInteriores * value) + '</p>';

}else if (!checkedFlete && checkedPintura && !checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorPintura * value) + '</p>';

}else if (!checkedFlete && checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((valorPintura + valorInteriores) * value) + '</p>';

}else if (!checkedFlete && !checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (valorInteriores * value) + '</p>';
} 
}


function mostrarInput() {
        element = document.getElementById("content");
        check = document.getElementById("toogle4");
        if (check.checked) {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
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
