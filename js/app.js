// Tu código aquí
const labelNum = document.querySelector("#counter");
const btnmenos = document.querySelector("#btnmenos");
//const btnmas = docuemnt.querySelector("#btnmas");
var contador = 0;
btnmas.addEventListener("click", function(){
     contador = contador +1;
  if(contador == 0){
        labelNum.style.color ="black"
    }else if (contador <0){
        labelNum.style.color ="red"
    }else if (contador > 0){
        labelNum.style.color ="green"
    }

labelNum.textContent = contador;
})

btnmenos.addEventListener("click", function(){
    contador = contador -1;
    if(contador == 0){
        labelNum.style.color ="black"
    }else if (contador <0){
        labelNum.style.color ="red"
    }else if (contador > 0){
        labelNum.style.color ="green"
    }
  
    labelNum.textContent = contador;
})