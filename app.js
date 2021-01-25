function alerta() 
{

 var nombre = prompt("Ingrese su nombre ");
 var mail = prompt("Ingrese su mail");

 


 /* ESTO TODAVIA NO ME FUNCA QUIERO UNA FUNCION QUE ME DETECTE QUE EL MAIL INGRESO TIENE TODOS LOS CARACTERES REQUERIDOS (VER CON TUTOR)

 function validarMail (mail){ 
 


var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

 var esValida = expReg.test(mail);
 
*/


 while (!mail)  {

		mail = (prompt("Ingrese un mail valido"));;
	

           
      
       }



var edad = parseInt(prompt("Ingrese su edad", "31"));
var edadOK = (edad >= 18 && edad < 100);


  	



    if (edadOK) {
        
       
      mensaje1 = ("Nombre: "  + " " + nombre + " " + "Mail: " + " " + mail + " " + "Edad: " + " " + edad);


        } else {

alert("debes ser mayor de 18 o menor de 100 años para solicitar un prestamo");
mensaje1 = ("Edad insuficiente");



}


if (!edadOK) {


	alert("debes ser mayor de 18 o menor de 100 años para solicitar un prestamo");

	mensaje2 = ("Edad insuficiente");



}

   






function getDatosPersonales() {


    return (this.nombre + " " + this.mail + " " + this.edad);


}



function datosUsuario(nombre, mail, edad) {
    this.nombre = nombre;
  	this.mail = mail;
  	this.edad = edad;
  	

    this.datosPublicos = getDatosPersonales;
}
var miUsuario = new datosUsuario(nombre, mail, edad);

console.log ("Datos",miUsuario);


console.log(miUsuario.datosPublicos());

		


	
 	
 	var opcionFlete = confirm("Añadir Servicio Flete");
 	var opcionPintura = confirm("Añadir Servicio Pintura");
 	var opcionInteriores = confirm("Añadir Servicio Interiores");

 	var arrayFlete = ["Servicio Flete"];
 	var arrayPintura =["Servicio Pintura"];
 	var arrayInteriores = ["Servicio Diseño Interiores"];
 	
 	
 	


 	var mensaje1;
	var mensaje2;

 	var valorFlete = parseInt(7999);
 	var valorPintura = parseInt(14999);
 	var valorInteriores = parseInt(6999);

 	
 	var valorFull = (valorFlete + valorPintura + valorInteriores);


 	

	
 



if (opcionFlete == true && opcionPintura == true && opcionInteriores == true) {

	alert ("Has elegido el Serivicio Full");

	 mensaje2 = ("Tipo de Servicio Full " + "Total " + " $ " + valorFull + "");

	 console.log("Has elegido los siguientes servicios: " + arrayFlete.concat(arrayPintura.concat(arrayInteriores)));

} else if (opcionFlete == false && opcionPintura == true && opcionInteriores == true) {

	alert ("Has elegido el Serivicio Pintura + Interiores");

	 mensaje2 = ("Tipo de Servicio: Pintura + Interiores " + "Total " + " $ " + (valorFull - valorFlete) + "");

	  console.log("Has elegido los siguientes servicios: " + arrayPintura.concat(arrayInteriores));

}else if (opcionFlete == false && opcionPintura == false && opcionInteriores == true) {

	alert ("Has elegido el Serivicio Interiores");

	 mensaje2 = ("Tipo de Servicio: Interiores " + "Total " + " $ " + valorInteriores + "");

	 console.log("Has elegido los siguientes servicios: " + arrayInteriores);

}else if (opcionFlete == true && opcionPintura == false && opcionInteriores == true) {

	alert ("Has elegido el Serivicio Flete + Interiores");

	 mensaje2 = ("Tipo de Servicio: Flete + Interiores " + "Total " + " $ " + (valorFull - valorPintura) + "");

	console.log("Has elegido los siguientes servicios: " + arrayFlete.concat(arrayInteriores));
}else if (opcionFlete == true && opcionPintura == true && opcionInteriores == false) {

	alert ("Has elegido el Serivicio Flete + Pintura");

	 mensaje2 = ("Tipo de Servicio: Flete + Pintura " + "Total " + " $ " + (valorFull - valorInteriores) + "");

	 console.log("Has elegido los siguientes servicios: " + arrayFlete.concat(arrayPintura));

	}else if (opcionFlete == true && opcionPintura == false && opcionInteriores == false) {

	alert ("Has elegido el Serivicio Flete");

	 mensaje2 = ("Tipo de Servicio: Flete " + "Total " + " $ " + valorFlete + "");
	 console.log("Has elegido los siguientes servicios: " + arrayFlete);

	}else if (opcionFlete == false && opcionPintura == true && opcionInteriores == false) {

	alert ("Has elegido el Serivicio Pintura");

	 mensaje2 = ("Tipo de Servicio: Pintura " + "Total " + " $ " + valorPintura + "");
	console.log("Has elegido los siguientes servicios: " + arrayPintura);
	} else {

	alert ("No has elegido ningun servicio");

	 mensaje2 = ("Tipo de Servicio: Ninguno " + "Total " + " $0 " + "");

	 console.log("No has elegido ningun servicio ");






}
     
document.getElementById("datosUsuario").innerHTML = mensaje1;
document.getElementById("datosServicio").innerHTML = mensaje2;

}

  

 