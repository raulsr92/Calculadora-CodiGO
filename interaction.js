// capturar todos los botones de la calculadora en variables//

const numberOne = document.querySelector(".item1")
console.log(numberOne);
const numberTwo = document.querySelector(".item2")
const numberThree = document.querySelector(".item3")
const numberFour = document.querySelector(".item4")
const numberFive = document.querySelector(".item5")
const numberSix = document.querySelector(".item6")
const numberSeven = document.querySelector(".item7")
const numberEight = document.querySelector(".item8")
const numberNine = document.querySelector(".item9")
const botonTrash = document.querySelector(".item10")
const botonDelete = document.querySelector(".item11")
const botonDot = document.querySelector(".item12")
const botonPlus = document.querySelector(".item-a")
const botonMinus = document.querySelector(".item-b")
const botonPor = document.querySelector(".item-c")
const botonDivide = document.querySelector(".item-d")
const botonEquals = document.querySelector(".item-e")
console.log(botonEquals);

// capturar elemento donde se imprimirán los resultados

const windows = document.querySelector(".calculator__up p")
console.log(windows);


botonEquals.addEventListener("click", operacionCalculadora);

function operacionCalculadora(){
    
}