var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var x = 700;
var y = 0;
var movement = 20;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento)
{
  switch (evento.keyCode) {
    case teclas.UP:
      y-= movement;
      dibujar()
    break;
    case teclas.DOWN:
      y+= movement;
      dibujar()
    break;
    case teclas.LEFT:
      x-= movement;
      dibujar()
    break;
    case teclas.RIGHT:
      x+= movement;
      dibujar()
    break;

    default:
  }
}


var fondo = {
  url: "forest.png",
  cargaOk: false
}
var bird1 = {
  url: "bird1.png",
  cargaOk: false
};
var bird2 = {
  url: "bird2.png",
  cargaOk: false
};
var bird3 = {
  url: "bird3.png",
  cargaOk: false
};
var aguila = {
  url: "aguila.png",
}

bird1.objeto = new Image();
bird1.objeto.src = bird1.url;
bird1.objeto.addEventListener("load", db1);

bird2.objeto = new Image();
bird2.objeto.src = bird2.url;
bird2.objeto.addEventListener("load", db2);

bird3.objeto = new Image();
bird3.objeto.src = bird3.url;
bird3.objeto.addEventListener("load", db3);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

aguila.objeto = new Image();
aguila.objeto.src = aguila.url;

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function db1()
{
  bird1.cargaOk = true;
  dibujar();
}
function db2()
{
  bird2.cargaOk = true;
  dibujar();
}
function db3()
{
  bird3.cargaOk = true;
  dibujar();
}


var cantidad = aleatorio(1, 5);
console.log(cantidad);


function dibujar()
{
  if (fondo.cargaOk){
    papel.drawImage(fondo.objeto, 0, 0);
  }
  for (var i=0; i<cantidad; i++){
    if (bird1.cargaOk){
      var x1 = aleatorio(0, 9)
      var y1 = aleatorio(0, 5)
      papel.drawImage(bird1.objeto, (x1*80), (y1*80), 80, 80);
    }
    if (bird2.cargaOk){
      var x2 = aleatorio(0, 9)
      var y2 = aleatorio(0, 5)
      papel.drawImage(bird2.objeto, (x2*80), (y2*80), 80, 80);
    }
    if (bird3.cargaOk){
      var x3 = aleatorio(0, 9)
      var y3 = aleatorio(0, 5)
      papel.drawImage(bird3.objeto, (x3*80), (y3*80), 80, 80);
    }
  }
  papel.drawImage(aguila.objeto, x, y, 150, 150);
}


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1)) + min;
  return resultado;
}
