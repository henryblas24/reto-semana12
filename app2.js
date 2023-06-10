const boton = document.getElementById('boton')
/*console.log(boton)*/
const modal = document.querySelector('.modal')

boton.addEventListener('click',(e) => {
modal.style='display: block'} )

const cerrar = document.querySelector('.cerrar')

cerrar.addEventListener('click',(e) => {
    modal.style='display: none'} )

const aceptar = document.getElementById('aceptar')
console.log(aceptar)

aceptar.addEventListener('click',(e) => {
    modal.style='display: none'} )


const cancel = document.getElementById('cancel')
console.log(cancel)

cancel.addEventListener('click',(e) => {
    modal.style='display: none'} )
    