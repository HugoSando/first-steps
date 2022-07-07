var d = document.getElementById("canvas");
var papel = d.getContext("2d");
var x = 300;
var y = 300;
var colorcito = "blue";


document.addEventListener("mousemove", dibujarTeclado);

function dibujarTeclado(evento)
{
  dibujarlinea(colorcito, x, y, evento.clientX, evento.clientY, papel);
  x = evento.clientX;
  y = evento.clientY;
  console.log(evento);
}

function dibujarlinea(color, xi, yi, xf, yf, lienzo)
{
  lienzo.beginPath();
  lienzo.lineWidth = 3;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarlinea("black", 1, 1, 1, 599, papel);
dibujarlinea("black", 1, 599, 599, 599, papel);
dibujarlinea("black", 599, 599, 599, 1, papel);
dibujarlinea("black", 599, 1, 1, 1, papel);
dibujarlinea(colorcito, 300, 300, 301, 301, papel);
