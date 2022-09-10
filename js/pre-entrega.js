
nombre = prompt ('Bienvenido a ARKI. Cual es tu nombre?')

saludo = alert ('Hola, '+nombre+' un gusto tenerte, comencemos!')

let sectorseleccionado = parseInt(prompt ('Que sector nesecitas remodelar?\n(ingrese el numero)\n1-Cocina\n2-Bano\n3-Dormitorio\n4-Sala de Estar\n5-Garage\n6-Oficina'))


let totalcompra = 0
let aumentarSector = true 
let decidir
let productos = []
let carrito = []


//--------- OBJETOS/SECTORES

class sector {

    constructor (id, nombre, precio){

        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}
//cocina

const cocina = new sector (1, 'cocina', 6000);

productos.push(cocina);

//bano

const bano = new sector (2, 'bano', 8000);

productos.push(bano);

//dormitorio

const dormitorio = new sector (3, 'bano', 5000);

productos.push(dormitorio);

//Sala de estar

const salaDeEstar = new sector (4, 'sala de estar', 5500);

productos.push(salaDeEstar);

//Garage

const garage = new sector (5, 'garage', 5300);

productos.push(garage);

//Oficina

const oficina = new sector (6, 'oficina', 4500);

productos.push(oficina);

//-----------------

while (aumentarSector === true){

    const productosolicitado = productos.find(prod => prod.id === sectorseleccionado)
    
    if (sectorseleccionado){

        totalcompra = totalcompra + productosolicitado.precio
        
    }else {

        sectorseleccionado = parseInt(prompt('Ingresa uno de los sectores indicados:\n1-Cocina\n2-Bano\n3-Dormitorio\n4-Sala de Estar\n5-Garage\n6-Oficina '))

        continue
    }

    decidir = parseInt (prompt('Quieres agregar otro sector al carrito\n1-Si\n2-No'))

    if(decidir === 1 ){

        sectorseleccionado = parseInt(prompt('Indique el numero del sector que quiere agregar:\n1-Cocina\n2-Bano\n3-Dormitorio\n4-Sala de Estar\n5-Garage\n6-Oficina'))

    } else if (decidir === 2 ){

        aumentarSector = false

    }
  
}

for( let i=0; i < carrito.length ; i++ ){

    totalcompra = totalcompra +carrito[i].precio
}
alert (''+nombre+' EL valor total de su compra es:' +totalcompra)



//ELECCION DE ARQUITECTO

email = prompt ('Si quiere que un Arquitecto se comunique con usted, dejenos su e-mail')

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


