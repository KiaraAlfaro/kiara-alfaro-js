
//nombre = prompt ('Bienvenido a ARKI. Cual es tu nombre?')

//saludo = alert ('Hola, '+nombre+' un gusto tenerte, comencemos!')

let productosCocina = []
let productosBano = []
let carrito = []

const seleccionCocina= document.getElementById('eleccionCocina')

const seleccionBano = document.getElementById('eleccionBano')

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
    seleccionCocina.append(option)
})


const agregarCocina= document.getElementById('agregarCocina')

const botonAgregarCocina = document.createElement('button')
botonAgregarCocina.innerText = 'Agregar al carrito'
agregarCocina.append(botonAgregarCocina)

agregarCocina.onclick = () => {

    const sectoresSeleccionado = productosCocina[seleccionCocina.selectedIndex]
    carrito.push(sectoresSeleccionado)

}


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
    seleccionBano.append(option)
})

const agregarBano = document.getElementById('agregarBano')

const botonAgregarBano = document.createElement('button')
botonAgregarBano.innerText = 'Agregar al carrito'
agregarBano.append(botonAgregarBano)

//finalizar compra

const boton = document.createElement('button')
boton.innerText = 'Terminar Compra'
document.body.append(boton)

boton.onclick = () => {

    let totalcompra = 0 

    carrito.forEach((prod) => {

        totalcompra = totalcompra + prod.precio
    })

    alert (`El precio final a pagar es $${totalcompra}`)


    email = prompt ('Si quiere que un Arquitecto se comunique con usted para controlar su compra, dejenos su e-mail')

    arquitecto = prompt( 'Elije a uno de nuestros Arquitectos para su proyecto:\n(ingrese el numero)\n1-Agustin Lazaro\n2-Lidia Gonzales\n3-Alenjandro Diaz\n4-Kiara Alfaro')


    switch (arquitecto){

        case ('1'):
    
            alert(' El Arq.Agustin Lazaro se comunicara proximamente a '+email+'')
            alert ('Gracias '+nombre+' por usar ARKI!')

        break
    
        case ('2'):
    
            alert(' La Arq.Lidia Gonzales se comunicara proximamente a '+email+'')
            alert ('Gracias '+nombre+' por usar ARKI!')
            
        break
    
        case ('3'):
    
            alert(' El Arq.Alenjandro Diaz se comunicara proximamente a '+email+'')
            alert ('Gracias '+nombre+' por usar ARKI!')
            
        break
    
        case ('4'):
    
            alert(' La Arq.Kiara Alfaro se comunicara proximamente a '+email+'')
            alert ('Gracias '+nombre+' por usar ARKI!')
            
        break
    
        alert ('Gracias '+nombre+' por usar ARKI!')
    }


    alert ('Gracias por usar ARKI!')


}

