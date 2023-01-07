const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const buttonNumbers = document.querySelectorAll('.numero');
const operators = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

buttonNumbers.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

operators.forEach(boton => {
    boton.addEventListener('click', ()=> display.computar(boton.value) )
});
