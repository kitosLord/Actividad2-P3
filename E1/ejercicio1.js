document.getElementById('boton1').addEventListener( 'click', function(){

   let numero = document.getElementById('input-1').value

    if (numero >= 18 &&  numero < 99 ){
        alert('eres mayor de edad ya puedes conducir :)')
    }
    else if (numero > 99){
        alert('eres muy viejo ya no puedes')
    }
    else if (numero <= 0){
        alert( 'no se aceptan numeros negativos o 0')
    }
    else {
        alert( 'no puedes conducir eres menor aún')
    }


})
