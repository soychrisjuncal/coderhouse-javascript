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


// function flete (servicio,preciosindesc,precioDesc,preciocondesc) {

// this.servicio= "Flete completo (traslado y despacho)";
// this.preciosindesc= valorFlete;
// this.precioDesc= ((valorFlete * 20)/100) ;
// this.preciocondesc= (preciosindesc - precioDesc);

// }


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

document.getElementById("tarjeta-text").innerHTML = '<p id="tarjeta-text" class="tarjeta-text">' +  flete[0] + '</p>';;
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

 
  
if(checkedFlete && !checkedPintura && !checkedInteriores ){ 



document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + flete[1] +'</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + valorDescFlete +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + valorFleteConDesc +'</p>';



}else if (checkedFlete && checkedPintura && !checkedInteriores ){
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " +  (flete[1] + (pintura[1] * value)) +  '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((valorDescPintura + valorDescFlete)) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(valorPinturaConDesc + valorFleteConDesc) +'</p>';


}else if (checkedFlete && checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]  + (pintura[1] + interiores[1]) * value) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((valorDescPintura + valorDescFlete + valorDescInteriores)) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(valorFleteConDesc + valorPinturaConDesc + valorInterioresConDesc) +'</p>';


}else if (checkedFlete && !checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((flete[1]) + (interiores[1] * value)) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((valorDescInteriores + valorDescFlete)) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(valorInterioresConDesc + valorFleteConDesc) +'</p>';

}else if (!checkedFlete && checkedPintura && !checkedInteriores) {

  
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (pintura[1] * value) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(valorDescPintura) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(valorPinturaConDesc) +'</p>';

}else if (!checkedFlete && checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((pintura[1] + interiores[1]) * value) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt((valorDescInteriores + valorDescPintura)) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(valorInterioresConDesc + valorPinturaConDesc) +'</p>';


}else if (!checkedFlete && !checkedPintura && checkedInteriores) {
document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (interiores[1] * value) + '</p>';
document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "- 20% OFF $ " + parseInt(valorDescInteriores) +'</p>';
document.getElementById("mostrar-total3").innerHTML = '<p id="mostrar-total3" class="tarjeta-text6">' + "TOTAL $ " + parseInt(valorInterioresConDesc) +'</p>';
} 

aplicarDescuento();

//  if (codigoDesc == "MOOD20") {
  
// aplicarDescuento();

// if(codigoDesc == "MOOD20" && checkedFlete && !checkedPintura && !checkedInteriores ){ 

// aplicarDescuento();

// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " SUBTOTAL: $ " + flete[1] + "- 20% OFF" +'</p>';
// document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + " TOTAL: $ " + (flete[1] - ((flete[1] * 20) / 100)) + '</p>';
// // document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + flete[1] +'</p>';

// }else if (codigoDesc != "MOOD20" && checkedFlete && !checkedPintura && !checkedInteriores ) {

// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + flete[1] +'</p>';
// document.getElementById("mostrar-total2").display = 'none';



// } 

// if (checkedFlete && checkedPintura && !checkedInteriores ){
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " +  (flete[1] + (pintura[1] * value)) +  '</p>';


// }else if (checkedFlete && checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]  + (pintura[1] + interiores[1]) * value) + '</p>';


// }else if (checkedFlete && !checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((flete[1]) + (interiores[1] * value)) + '</p>';

// }else if (!checkedFlete && checkedPintura && !checkedInteriores) {

  
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (pintura[1] * value) + '</p>';

// }else if (!checkedFlete && checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((pintura[1] + interiores[1]) * value) + '</p>';

// }else if (!checkedFlete && !checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (interiores[1] * value) + '</p>';
// } 


}


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


 



// document.getElementById('ambientes').innerHTML=document.getElementById('ambiente').value;



// if (checkedFlete && !checkedPintura && !checkedInteriores && codigoDesc == "MOOD20") {

  

//   element.style.display='block';
// elementoError.style.display='none';
// cambioAmbientes();
// }else{


// elementoError.style.display='block';
// element.style.display='none';
// cambioAmbientes();
// }



// var checkedFlete = checkboxFlete.checked;
//   var checkedPintura = checkboxPintura.checked;
//    var checkedInteriores = checkboxInteriores.checked;
// if(checkedFlete && !checkedPintura && !checkedInteriores && codigoDesc == "MOOD20"){ 
  
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " SUBTOTAL: $ " + flete[1] + "- 20% OFF" +'</p>';
// document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + " TOTAL: $ " + (flete[1] - ((flete[1] * 20) / 100)) + '</p>';
// element.style.display='block';
// elementoError.style.display='none';
// }else{
  

// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + flete[1] + '</p>';
// document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "  " + '</p>';
// elementoError.style.display='block';
// element.style.display='none';
// }
// if (checkedFlete && checkedPintura && !checkedInteriores && codigoDesc == "MOOD20"){
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " SUBTOTAL: $ " + (flete[1] + (pintura[1] * value)) + "- 20% OFF" + '</p>';
// document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + " TOTAL: $ " + ((flete[1] + (pintura[1] * value)) - (((flete[1] + (pintura[1] * value)) * 20) / 100)) + '</p>';
// element.style.display='block';
// elementoError.style.display='none';
// }else{
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1] + (pintura[1] * value)) + '</p>';
// document.getElementById("mostrar-total2").innerHTML = '<p id="mostrar-total2" class="tarjeta-text5">' + "  " + '</p>';
// elementoError.style.display='block';
// element.style.display='none';
// }

// if (checkedFlete && checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (flete[1]  + (pintura[1] + interiores[1]) * value) + '</p>';


// }else if (checkedFlete && !checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((flete[1]) + (interiores[1] * value)) + '</p>';

// }else if (!checkedFlete && checkedPintura && !checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (pintura[1] * value) + '</p>';

// }else if (!checkedFlete && checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + ((pintura[1] + interiores[1]) * value) + '</p>';

// }else if (!checkedFlete && !checkedPintura && checkedInteriores) {
// document.getElementById("mostrar-total1").innerHTML = '<p id="mostrar-total1" class="tarjeta-text4">' + " $ " + (interiores[1] * value) + '</p>';
// } 






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

var flete = ["Flete completo (traslado y despacho)", valorFlete, valorDescFlete, valorFleteConDesc];
var pintura = ["Pintura (techo y paredes)", valorPintura, valorDescPintura, valorPinturaConDesc];
var interiores = ["Diseño Interiores", valorInteriores, valorDescInteriores, valorInteriores];



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
