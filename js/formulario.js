const titulo = document.getElementById('titulo2')
const formulario = document.getElementById ('formRegistro')

formulario.onsubmit = (event)=>{

    event.preventDefault()
    inforArray= []

    for (const input of event.target.children){

        const obj = {}

        obj ['tipo'] = input.name
        obj ['valor'] = input.value 

        inforArray.push(obj)

    }

    console.log (inforArray)

    localStorage.setItem('info',JSON.stringify (inforArray))
}

const informacion = JSON.parse(localStorage.getItem('info'))

let nombre = ''
let apellido = ''

informacion.forEach(dato => {

    if (dato.tipo === 'nombre'){

        nombre = dato.valor
    }
    if (dato.tipo === 'apellido'){

        apellido = dato.valor
    }
    
})

if (nombre!=='' || apellido!==''){

    titulo.innerText = `Hola ${nombre} ${apellido}, bienvenido a ARKI devuelta!!`
}