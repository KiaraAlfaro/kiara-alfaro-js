
let proyecto = prompt ('ingrese el tipo de proyecto deseado para tu vivienda: proyectar o remodelar')
const primerproyecto = 'remodelar'
const segundoproyecto = 'proyectar'

while ( (proyecto !== primerproyecto) && (proyecto !== segundoproyecto ) ){

    alert ('No contamos con este servicio.Vuelve a intentarlo!');
    proyecto = prompt ('ingrese el tipo de proyecto deseado para tu vivienda: proyectar o remodelar');

    arquitecto = prompt( 'Eliga uno de nuestros Arquitectos que ayuda en su proyecto: Agustin Lazaro - Lidia Gonzales - Alenjandro Diaz - Kiara Alfaro')
    
    }if (arquitecto === 'Agustin Lazaro' ){

    alert ('Eligio al Arq. Agustin Lazaro. Se comunicaran proximamente')

    } else if (arquitecto === 'Lidia Gonzales' ){

        alert ('Eligio a la Arq. Lidia Gonzales. Se comunicaran proximamente')
        
    }else if (arquitecto === 'Alenjandro Diaz' ){

        alert ('Eligio al Arq. Alenjandro Diaz. Se comunicaran proximamente')
        
    }else if (arquitecto === 'Kiara Alfaro' ){

        alert ('Eligio al Arq. Kiara Alfaro. Se comunicaran proximamente')
        
    }else if ((arquitecto !== 'Agustin Lazaro' ) && (arquitecto !== 'Lidia Gonzales' ) && (arquitecto !== 'Alenjandro Diaz' ) && (arquitecto !== 'Kiara Alfaro' ) ){

        alert ('El Arquitecto nombrado no es parte de nuestro equipo.')
        
    }



















    