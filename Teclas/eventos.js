var d = document.getElementById("canvas");
var papel = d.getContext("2d");
var x = 150;
var y = 150;
var colorcito = "blue";
var movimiento = 20;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

dibujarlinea("red", 149, 149, 151, 151, papel);

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

function dibujarTeclado(evento)
{
  switch (evento.keyCode) {
    case teclas.UP:
        dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    break;
    case teclas.DOWN:
        dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    break;
    case teclas.LEFT:
        dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    break;
    case teclas.RIGHT:
        dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    break;

    default:
  }
}
