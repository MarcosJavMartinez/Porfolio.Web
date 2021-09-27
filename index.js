
const boton = document.getElementById("collapse");
const contenido = document.getElementById("content");
let flag = false 
boton.addEventListener("click", () => {
    if(flag === false){
        contenido.classList.add("collapsed");
        //flag = true;
    }else{
        contenido.classList.remove("collapsed");
        //flag = false;
    }
   flag = !flag 
    
});