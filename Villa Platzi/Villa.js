var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

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

var cantidad = aleatorio(1, 10);
console.log(cantidad);

function dibujar()
{
  if (fondo.cargaOk){
    papel.drawImage(fondo.objeto, 0, 0);
  }
  for (var i=0; i<cantidad; i++){
    if (bird1.cargaOk){
      var x = aleatorio(0, 700)
      var y = aleatorio(0, 420)
      papel.drawImage(bird1.objeto, x, y, 80, 80);
    }
    if (bird2.cargaOk){
      var x = aleatorio(0, 700)
      var y = aleatorio(0, 420)
      papel.drawImage(bird2.objeto, x, y, 80, 80);
    }
    if (bird3.cargaOk){
      var x = aleatorio(0, 700)
      var y = aleatorio(0, 420)
      papel.drawImage(bird3.objeto, x, y, 80, 80);
    }
  }
}


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1)) + min;
  return resultado;
}
