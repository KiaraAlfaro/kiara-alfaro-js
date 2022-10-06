const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const botonIngresar= document.getElementById('ingresar')
const divDatos = document.querySelector('#divDatos')
const divSaludo = document.querySelector('#saludo')

const divPresentacion = document.getElementById('presentacion')

Swal.fire({
    title: 'Bienvenido a ARKI!!',
    text: 'Traenos tu idea, y dejá el resto en nuestras manos. Nosotros nos encargamos de todo: desde la planificación y diseño inicial, hasta la ejecución de obra y detalles finales. Todo lo que necesite tu proyecto!!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
})





botonIngresar.onclick = () => {

    const usuario = {

        nombre: inputNombre.value,
        apellido: inputApellido.value

    }

    localStorage.setItem('usuarioStorage',JSON.stringify(usuario))
    divDatos.remove()
    saludar(usuario)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Ingreso correctamente'
    })
}

function saludar(user){

    const{nombre,apellido} = user

    const saludarTitulo = document.createElement('h2')
    saludarTitulo.innerText = `Bienvenido ${nombre} ${apellido},Ya puedes comenzar con tus compras!`
    divSaludo.append(saludarTitulo)

}

///compras///


let productosCocina = []
let productosBano = []
let carrito = []

const seleccionCocina= document.getElementById('eleccionCocina')

const seleccionBano = document.getElementById('eleccionBano')

const terminarCompra = document.getElementById('terminarCompra')

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

    const {m2, precio} = prodCocina
    
    const option = document.createElement('option')
    option.innerText = `${m2}: $${precio}`
    seleccionCocina.append(option)
})


const agregarCocina= document.getElementById('agregarCocina')

const botonAgregarCocina = document.createElement('button')
botonAgregarCocina.innerText = 'Agregar al carrito'
agregarCocina.append(botonAgregarCocina)

agregarCocina.onclick = () => {

    const sectoresSeleccionado = productosCocina[seleccionCocina.selectedIndex]
    carrito.push(sectoresSeleccionado)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
    })

}


//----------bano

const bano1 = new sector ('Entre 5m2 a 9m2', 9000);

productosBano.push(bano1);

const bano2 = new sector ('Entre 9m2 a 15m2', 10000);

productosBano.push(bano2);

const bano3 = new sector ('Mas de 15m2', 20000);

productosBano.push(bano3);



productosBano.forEach(prodBano=>{

    const {m2, precio} = prodBano

    const option = document.createElement('option')
    option.innerText = `${m2}: $${precio}`
    seleccionBano.append(option)
})

const agregarBano = document.getElementById('agregarBano')

const botonAgregarBano = document.createElement('button')
botonAgregarBano.innerText = 'Agregar al carrito'
agregarBano.append(botonAgregarBano)

agregarBano.onclick = () => {

    const sectoresSeleccionado = productosBano[seleccionBano.selectedIndex]
    carrito.push(sectoresSeleccionado)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
    })

}




//finalizar compra


const botonFinalizar = document.getElementById('terminarCompra')
const tituloMontoFinal = document.getElementById('tituloMontoFinal')

botonFinalizar.onclick = () => {



    let totalcompra = 0 

    carrito.forEach((prod) => {

        totalcompra = totalcompra + prod.precio
    })

    const tituloMonto = document.createElement('h2')
    tituloMonto.innerText = `El precio final a pagar es de $ ${totalcompra},Gracias por su compra!`
    tituloMontoFinal.append(tituloMonto)

    divPresentacion.remove()
    divSaludo.remove()

}

// insertar luego eleccion de arquitectos//

//.///

const clima = fetch('https://pokeapi.co/api/v2/pokemon')

console.log(clima)
 