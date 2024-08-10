const catalogo = document.getElementById("store--desc");
const catalogoImg = document.getElementById("store--img");
let servicios = null;


const url = "servicios.json";
fetch(url)
.then(response =>response.json())
.then(response => {
    servicios = response;
mostrarServicios(servicios);
})
.catch(error=>console.error());


const mostrarServicios = (servicios) =>{
    servicios.map((servicio) =>{

        const nombrePrestador = document.createElement("h4");
      const tipoServicio = document.createElement("h3");
        const ubicacionPrestador = document.createElement("h5");
        const descripcionServicio = document.createElement("p");
        const boton = document.createElement("button");
        const botonCorazon = document.createElement("button");
        const botonOjo = document.createElement("button");
        const estrella = document.createElement("label");
        const fotosServicios = document.createElement("img");
       

        nombrePrestador.textContent = servicio.nombrePrestador;
        tipoServicio.textContent = servicio.tipoServicio;
        ubicacionPrestador.textContent = servicio.ubicacionPrestador;
        descripcionServicio.textContent= servicio.descripcionServicio;
        boton.innerHTML = `Contactar`;
        boton.id = `boton--contactar`;
        botonCorazon.innerHTML = `♥`;
        botonCorazon.id = `boton--corazon`;
        botonOjo.innerHTML = `👁️‍🗨️`;
        botonOjo.id = `boton--ojo`;
        estrella.textContent = `★★★★★`;
        //☆ 
        fotosServicios.src = servicio.fotosServicios;
        
        
        
        catalogo.appendChild(tipoServicio);
        catalogo.appendChild(nombrePrestador);
        catalogo.appendChild(estrella);
        catalogo.appendChild(ubicacionPrestador);
        catalogo.appendChild(descripcionServicio);
        catalogo.appendChild(boton)
        catalogo.appendChild(botonCorazon)
        catalogo.appendChild(botonOjo)
        catalogoImg.appendChild(fotosServicios);
    })
}
