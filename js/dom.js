
nombre = prompt ('Bienvenido a ARKI. Cual es tu nombre?')

saludo = alert ('Hola, '+nombre+' un gusto tenerte, comencemos!')

let productosCocina = []
let productosBano = []
let carrito = []

const selectTag = document.getElementById('eleccionCocina')

const selectTag2 = document.getElementById('eleccionBano')

//--------- OBJETOS/SECTORES


class sector {

    constructor (m2, precio){

        this.m2= m2
        this.precio = precio
    }
}


//cocina



const cocina1 = new sector ('Entre 5m2 a 9m2', 8000);

productosCocina.push(cocina1);

const cocina2 = new sector ('Entre 9m2 a 15m2', 9000);

productosCocina.push(cocina2);

const cocina3 = new sector ('Mas de 15m2', 15000);

productosCocina.push(cocina3);


productosCocina.forEach(prodCocina=>{

    const option = document.createElement('option')
    option.innerText = `${prodCocina.m2}: $${prodCocina.precio}`
    selectTag.append(option)
})



//----------bano



const bano1 = new sector ('Entre 5m2 a 9m2', 9000);

productosBano.push(bano1);

const bano2 = new sector ('Entre 9m2 a 15m2', 10000);

productosBano.push(bano2);

const bano3 = new sector ('Mas de 15m2', 20000);

productosBano.push(bano3);



productosBano.forEach(prodBano=>{

    const option = document.createElement('option')
    option.innerText = `${prodBano.m2}: $${prodBano.precio}`
    selectTag2.append(option)
})


//finalizar compra

const boton = document.createElement('button')
boton.innerText = 'Agregar al carrito'
document.body.append(boton)