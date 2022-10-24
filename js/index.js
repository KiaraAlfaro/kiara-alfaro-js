const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const botonIngresar= document.getElementById('ingresar')
const divDatos = document.querySelector('#divDatos')
const divSaludo = document.querySelector('#saludo')

const divPresentacion = document.getElementById('presentacion')
const divRemodelacion = document.getElementById('tituloRemodelacion')

const verCarrito = document.getElementById('verCarrito')
const divResumenCarrito = document.getElementById('resumenCarrito')

//alert bienvenida

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

//funciones mostrar y ocultar

cerrar()

function cerrar() {
    div = document.getElementById('presentacion');
    div.style.display = 'none';

    div = document.getElementById('resumenCarrito');
    div.style.display = 'none';

    div = document.getElementById('cartel');
    div.style.display = 'none';
    
    div = document.getElementById('clima');
    div.style.display = 'none';

}


function mostrar() {
    div = document.getElementById('presentacion');
    div.style.display = '';

    div = document.getElementById('resumenCarrito');
    div.style.display = '';

    div = document.getElementById('cartel');
    div.style.display = '';

    div = document.getElementById('clima');
    div.style.display = '';
}

function cerrarCarrito() {

    div = document.getElementById('resumenCarrito');
    div.style.display = 'none';

}
function mostrarCarrito() {
    div = document.getElementById('resumenCarrito');
    div.style.display = '';
}

function cerrarCartel() {

    div = document.getElementById('tituloCartel');
    div.style.display = 'none';

}
function mostrarCartel() {
    div = document.getElementById('tituloCartel');
    div.style.display = '';
}

//------------INGRESO A LA WEB

botonIngresar.onclick = () => {

    const usuario = {

        nombre: inputNombre.value,
        apellido: inputApellido.value

    }

    localStorage.setItem('usuarioStorage',JSON.stringify(usuario))
    divDatos.remove()
    saludar(usuario)
    mostrar()
    cerrarCarrito()
    
    

        
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

//------------Coienza sector compras

function saludar(user){

    const{nombre,apellido} = user

    const saludarTitulo = document.createElement('h2')
    saludarTitulo.className = "tituloBienvenido"
    saludarTitulo.innerText = `Bienvenido ${nombre} ${apellido},Ya puedes comenzar con tus compras!`
    divSaludo.append(saludarTitulo)

}


///compras///


let productosCocina = []
let productosBano = []
let productosDormitorio = []
let productosEstar = []
let carrito = []

const seleccionCocina= document.getElementById('eleccionCocina')

const seleccionBano = document.getElementById('eleccionBano')

const seleccionDormitorio = document.getElementById('eleccionDormitorio')

const seleccionEstar = document.getElementById('eleccionEstar')

const terminarCompra = document.getElementById('terminarCompra')

//-----------------OBJETOS/SECTORES


class sector {

    constructor (id, nombre,m2, precio,signoPrecio){

        this.Id= id
        this.nombre = nombre
        this.m2= m2
        this.precio = precio
        this.signoPrecio = signoPrecio
    }
}


//---------------------------cocina


const cocina1 = new sector (1,'Cocina','Entre 5m2 a 9m2', 8000, '$');

productosCocina.push(cocina1);

const cocina2 = new sector (2,'Cocina','Entre 9m2 a 15m2', 9000, '$');

productosCocina.push(cocina2);

const cocina3 = new sector (3,'Cocina','Mas de 15m2', 15000, '$');

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
        timer: 800
    })

   

}




//------------------------bano

const bano1 = new sector (4,'Bano','Entre 5m2 a 9m2', 9000, '$');

productosBano.push(bano1);

const bano2 = new sector (5,'Bano','Entre 9m2 a 15m2', 10000, '$');

productosBano.push(bano2);

const bano3 = new sector (6,'Bano','Mas de 15m2', 20000, '$');

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
        timer: 800
    })

}

//------------------------------Dormitorio



const Dormitorio1 = new sector (7,'Dormitorio','Entre 5m2 a 9m2', 8500, '$');

productosDormitorio.push(Dormitorio1);

const Dormitorio2 = new sector (8,'Dormitorio','Entre 9m2 a 15m2', 10000, '$');

productosDormitorio.push(Dormitorio2);

const Dormitorio3 = new sector (9,'Dormitorio','Mas de 15m2', 15000, '$');

productosDormitorio.push(Dormitorio3);


productosDormitorio.forEach(prodDormitorio=>{

    const {m2, precio} = prodDormitorio
    
    const option = document.createElement('option')
    option.innerText = `${m2}: $${precio}`
    seleccionDormitorio.append(option)
})


const agregarDormitorio = document.getElementById('agregarDormitorio')

const botonAgregarDormitorio = document.createElement('button')
botonAgregarDormitorio.innerText = 'Agregar al carrito'
agregarDormitorio.append(botonAgregarDormitorio)

agregarDormitorio.onclick = () => {

    const sectoresSeleccionado = productosDormitorio[seleccionDormitorio.selectedIndex]
    carrito.push(sectoresSeleccionado)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 800
    })

}

//--------------------------Estar

const Estar1 = new sector (10,'Sala de Estar','Entre 5m2 a 9m2', 9000, '$');

productosEstar.push(Estar1);

const Estar2 = new sector (11,'Sala de Estar','Entre 9m2 a 15m2', 15000, '$');

productosEstar.push(Estar2);

const Estar3 = new sector (12,'Sala de Estar','Mas de 15m2', 20000, '$');

productosEstar.push(Estar3);


productosEstar.forEach(prodEstar=>{

    const {m2, precio} = prodEstar
    
    const option = document.createElement('option')
    option.innerText = `${m2}: $${precio}`
    seleccionEstar.append(option)
})


const agregarEstar = document.getElementById('agregarEstar')

const botonAgregarEstar = document.createElement('button')
botonAgregarEstar.innerText = 'Agregar al carrito'
agregarEstar.append(botonAgregarEstar)

agregarEstar.onclick = () => {

    const sectoresSeleccionado = productosEstar[seleccionEstar.selectedIndex]
    carrito.push(sectoresSeleccionado)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 800
    })

}

///---------------------------------Resumen comrpra-------------------------------------------

const eliminarDelCarrito = (prodId) => {

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    pintarCarrito()
}

const pintarCarrito = () => {
  
    divResumenCarrito.innerHTML = '';
    divResumenCarrito.style.display ='';
    const titulo = document.createElement('div')
    titulo.className = "titulo"
    titulo.innerHTML = `
    
        <h3>Carrito:</h3>
    `;
    
    divResumenCarrito.append(titulo)

    const boton = document.createElement('h3')
    boton.innerText = 'X'
    boton.className = "boton-cerrar"

    boton.onclick = ( )=> {

        divResumenCarrito.style.display = "none";

    }
    titulo.append(boton)
   
    carrito.forEach((producto) => {

        let contenidoCarrito = document.createElement ('div');
        contenidoCarrito.className = "contenidoCarrito";
        contenidoCarrito.innerHTML = `
        
            <h3>${producto.nombre}</h3>
            <h3>${producto.m2}</h3>
            <p> ${producto.signoPrecio}${producto.precio}</p>
            <p clas="elimarProducto" onclick="eliminarDelCarrito(${producto.id})" >❌</p>
       
        `;

        divResumenCarrito.append(contenidoCarrito)

        let eliminar = document.createElement('span');

        cerrarCartel()
        mostrarCarrito()

    });
    
    
    let totalcompra = 0 

    carrito.forEach((prod) => {

        totalcompra = totalcompra + prod.precio
    })

    const tituloMonto = document.createElement('h4')
    tituloMonto.innerText = `El precio final es de $ ${totalcompra}`
    
    divResumenCarrito.append(tituloMonto)

};

verCarrito.addEventListener("click",pintarCarrito);





///----------------------Sector del CLima

let lon

let lat

let temperaturaValor = document.getElementById('temperaturaValor')
let temperaturaDescripcion = document.getElementById('temperaturaDescripcion')

let ubicacion = document.getElementById('ubicacion')
let iconoAnimado = document.getElementById('iconoAnimado')

let vientoVelocidad = document.getElementById('vientoVelocidad')


window.addEventListener('load',()=>{


    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition( posicion =>{


            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2804f2ba236f62d5d57dddda18a0f331`


            fetch(url)

            .then(response => {return response.json()})
            .then(data => {

                let temp = data.main.temp

                let tempGrados = temp - 273.15

                temperaturaValor.textContent =`${Math.round (tempGrados)}°C `


                let desc = data.weather[0].description

                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent = data.name
                
                vientoVelocidad.textContent = `${data.wind.speed}m/s`

                console.log(data.weather[0].main)

                switch(data.weather[0].main){

                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'

                }

            })
            .catch(error => {

                console.log(error)
            })
        })
    }

})