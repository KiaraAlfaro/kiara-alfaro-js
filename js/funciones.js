let totalpresupuesto =  0 

let cocina1 = 300000

let cocina2 = 600000

let cocina3 = 800000

let bano1 = 500000

let bano2 = 800000

let bano3 = 900000





nombre = prompt ('Bienvenido a ARKI. Cual es tu nombre?')

saludo = alert ('Hola, '+nombre+' un gusto tenerte con nostros!')

informacion= alert (''+nombre+', para darte una cotizacion aproximada de tu proyecto deberas contestar algunas preguntas.')

proyecto= parseInt(prompt ('Que tipo de proyecto nesecitas cotizar? (ingrese el numero)  1-Remodelacion 2-Proyecto desde cero?'))

if( proyecto === 1){

    sector= parseInt( prompt( 'Que deseas remodelar? (ingrese el numero) 1-Cocina 2-Bano'))

    if(sector=== 1){

        m2= parseInt( prompt('Cuantos m2 tiene tu sector? 1- Entre 5m2 a 9m2 2- Entre 9m2 a 15m2 3- Mas de 15m2' ))

        if(m2 === 1){

            alert ('Tu cotizacion es de '+cocina1+' ')
        }else if( m2=== 2){

            alert ('Tu cotizacion es de '+cocina2+' ')
        }else if (m2 === 3){

            alert ('Tu cotizacion es de '+cocina3+' ')
        }

       
    }else if (sector=== 2){

        m2= parseInt( prompt('Cuantos m2 tiene tu sector? 1- Entre 5m2 a 9m2 2- Entre 9m2 a 15m2 3- Mas de 15m2' ))

        if( m2 === 1 ){

            alert ('Tu cotizacion es de '+bano1+' ')
        }else if( m2=== 2){

            alert ('Tu cotizacion es de '+bano2+' ')
        }else if (m2 === 3){

            alert ('Tu cotizacion es de '+bano3+' ')
        }

       
    }
    
   

}else if ( proyecto === 2){

    superficieTerreno = parseInt (prompt('Cuantos m2 tiene el terreno? 1-100m2 o menos 2-200m2 o menos 3-300m2 o menos '))

    plantas = parseInt (prompt ('Cuantas plantas desea?(ingrese el numero) 1-Solo Planta Baja 2-PB + 1planta'))

    if((superficieTerreno=== 1) && (plantas=== 1)){
  
        presupuesto1terreno1()
    
    }else if((superficieTerreno=== 1) && (plantas=== 2)){

       presupuesto2terreno1()

    }

   
}


function presupuesto2terreno1(){

    terreno1= 1000000

    porpiso=1000000

    if(superficieTerreno  === 2){

        total = terreno1 + porpiso
        
    }

    alert(''+nombre+' tu cotizacion es de '+ total+' ')
}


function presupuesto1terreno1(){

    terreno1= 1000000

    if(superficieTerreno  === 1){

        total = terreno1 
    }

    alert(''+nombre+' tu cotizacion es de '+ total+' ')

}

function presupuesto2terreno1(){

    terreno1= 1000000

    porpiso=1000000

    if(superficieTerreno  === 2){

        total = terreno1 + porpiso
        
    }

    alert(''+nombre+' tu cotizacion es de '+ total+' ')
}

