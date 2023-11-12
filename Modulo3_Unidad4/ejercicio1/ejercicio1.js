
const cuadrado1 = document.getElementById("cuadrado1");
const cuadrado2 = document.getElementById("cuadrado2");
const cuadrado3 = document.getElementById("cuadrado3");


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


cuadrado1.addEventListener("click", function() {
    changeBackgroundColor("red");
});

cuadrado2.addEventListener("click", function() {
    changeBackgroundColor("green");
});

cuadrado3.addEventListener("click", function() {
    changeBackgroundColor("blue");
});