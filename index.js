//Collapso

const botonA = document.getElementById("collapseA");
const contenidoA = document.getElementById("contentA");
let flagA = false;

const botonB = document.getElementById("collapseB");
const contenidoB = document.getElementById("contentB");
let flagB = false;


botonA.addEventListener("click", () => {
	if(flagA === false){
		contenidoA.classList.add("collapsed");
	}else{
		contenidoA.classList.remove("collapsed");
	}
	flagA = !flagA;
});

botonB.addEventListener("click", () => {
	if(flagB === false){
		contenidoB.classList.add("collapsed");
	}else{
		contenidoB.classList.remove("collapsed");
	}
	flagB = !flagB;
});


