var crearModal = function(urlImagen){
    // var modal =  document.getElementById("modal");
    var contenedorImagen = document.getElementById("contenedor-imagen"); 
    contenedorImagen.innerHTML = "";
    var imagenCreada = document.createElement("img");
    imagenCreada.src = urlImagen;
    imagenCreada.classList.add("foto-modal");
    contenedorImagen.appendChild(imagenCreada);
    modal.style.display = "block";

}
var mostrarModal = function(){
    /*console.log(this);
        console.log(this.dataset)
        console.log(this.dataset.url)*/
    var urlProductoModal = this.dataset.url;
    crearModal(urlProductoModal);
}
var ocultarModal = function(){
    //forma uno
    this.parentNode.parentNode.style.display = "none";
    //forma dos 
    modal.style.display = "none";
}
var modal =  document.getElementById("modal");
var imagenes = document.getElementsByClassName("imagen");
var closeBtn = document.getElementById("close");
closeBtn.addEventListener("click",ocultarModal); 
for(var i = 0 ; i < imagenes.length; i += 1){
    imagenes[i].addEventListener("click",mostrarModal);
}