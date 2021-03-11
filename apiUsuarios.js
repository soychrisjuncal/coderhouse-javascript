var contenido = document.querySelector('#contenido')
       $( document ).ready(function() {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {            
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>

                `
            })
        }); 