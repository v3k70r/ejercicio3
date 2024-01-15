function changeColor(){
    const colores = ['red', 'green', 'blue'];
    var aleatorio = colores[Math.floor(Math.random() * colores.length)];  
    document.querySelector("h5").style.color = aleatorio;
}