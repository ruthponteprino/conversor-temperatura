let calcularFahrenheit = () =>{
    let num = document.getElementById('celcius').value
    let fahrenheit = (num*9/5)+32
    document.getElementById('demo').innerHTML = fahrenheit+"ºF"
}


