const abrirMenu = document.getElementById("abrir");
const cerrarMenu = document.getElementById("cerrar");
const nav = document.getElementById("nav");



abrirMenu.addEventListener("click", ()=>{
   nav.classList.toggle("visible")
});

cerrarMenu.addEventListener("click",
()=>{
    nav.classList.remove("visible");
});