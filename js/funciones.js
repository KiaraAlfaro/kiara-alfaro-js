
nombre = prompt ('Bienvenido a ARKI. Cual es tu nombre?')

saludo = alert ('Hola, '+nombre+' un gusto tenerte!\n Para comenzar tu cotizacion deberas contestar las siguientes preguntas!')



proyecto= parseInt(prompt ('Que tipo de proyecto nesecitas cotizar?\n(ingrese el numero)\n1-Remodelacion\n2-Proyecto desde cero'))

while ((proyecto !== '1') && (proyecto !== '2') ) {

    alert (''+nombre+' no contamos con este servicio, elige una opcion correcta. ')

    proyecto= parseInt(prompt ('Que tipo de proyecto nesecitas cotizar?\n(ingrese el numero)\n1-Remodelacion\n2-Proyecto desde cero'))


    //------------------OPCION REMODELAR-----------------------

    if( proyecto === 1){

        sector= parseInt( prompt( 'Que deseas remodelar?\n(ingrese el numero)\n1-Cocina\n2-Bano'))

        //-----OPCIONES
        
        if(sector=== 1){

            //cocina

            sectorRemodelar( 3000, 6000, 8000);

        
        }else if (sector=== 2){

            //bano

            sectorRemodelar( 5000, 8000, 9000);
        
        }
        
    //------------------OPCION PROYECTO DE 0-----------------------
    

    }else if ( proyecto === 2){

        superficieTerreno = parseInt (prompt('Cuantos m2 tiene el terreno?\n(ingrese el numero)\n1-100m2 o menos\n2-200m2 o menos\n3-300m2 o menos '))

        while ((superficieTerreno !== '1') && (superficieTerreno !== '2') && (superficieTerreno !== '3'))  {

            alert (''+nombre+' elige una opcion correcta. ')

            superficieTerreno = parseInt (prompt('Cuantos m2 tiene el terreno?\n(ingrese el numero)\n1-100m2 o menos\n2-200m2 o menos\n3-300m2 o menos '))
            
            plantas = parseInt (prompt ('Cuantas plantas desea?\n(ingrese el numero)\n1-Solo Planta Baja\n2-PB + 1planta\n3-PB + 2planta'))


            if((superficieTerreno=== 1) && (plantas=== 1)){
    
                terrenos ( 1000000, 0, 0);
            
            }else if((superficieTerreno=== 1) && (plantas=== 2)){
        
                terrenos ( 1000000,1000000, 1);
        
            }else if((superficieTerreno=== 1) && (plantas=== 3)){
        
                terrenos ( 1000000,1000000, 2);
        
            }else if((superficieTerreno=== 2) && (plantas=== 1)){
        
                terrenos ( 1500000,0,0 );
        
            }else if((superficieTerreno=== 2) && (plantas=== 2)){
        
                terrenos ( 1500000,1500000,1);
        
            }else if((superficieTerreno=== 2) && (plantas=== 3)){
        
                terrenos ( 1500000,1500000,2);
        
            }else if((superficieTerreno=== 3) && (plantas=== 1)){
        
                terrenos ( 2000000,0,0);
        
            }else if((superficieTerreno=== 3) && (plantas=== 2)){
        
                terrenos ( 2000000,2000000,1);
        
            }else if((superficieTerreno=== 3) && (plantas=== 3)){
        
                terrenos ( 2000000,2000000,2);
            }
            
            break
        }

    
    }

    break
}

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










//FUNCION PARA REMODELACION

function sectorRemodelar( valor1, valor2, valor3){


    m2= parseInt( prompt('Cuantos m2 tiene tu sector?\n1- Entre 5m2 a 9m2\n2- Entre 9m2 a 15m2\n3- Mas de 15m2' ))

    if(m2 === 1){

        alert (''+nombre+' tu cotizacion es de '+valor1+' ')

    }else if( m2=== 2){

        alert (''+nombre+' tu cotizacion es de '+valor2+' ')

    }else if (m2 === 3){

        alert (''+nombre+' tu cotizacion es de '+valor3+' ')
    }

}

//FUNCIONES PARA PROYECTO DE 0


function terrenos (valor1, valor2, valor3){

    let precioTerreno = valor1
    let precioxPlanta = valor2
    let nºPlantas = valor3 

    total = valor1 +( valor2 * valor3 );

    alert(''+nombre+' tu cotizacion es de '+total +' ')

}



