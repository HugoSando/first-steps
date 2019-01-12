var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var ancho = d.width;
var colorr = document.getElementById("colorr");
boton.addEventListener("click", dibujoPorClick);



function dibujalinea(xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorr.value;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var xf = 0;
  var xff = ancho;
  for (var l = 0;l < lineas; l++) {
    dibujalinea(0, xf, xf, ancho);
    dibujalinea(xf, ancho, ancho, xff);
    dibujalinea(ancho, xff, xff, 0);
    dibujalinea(xff, 0, 0, xf);
    xf = xf + ancho/lineas;
    xff = xff - ancho/lineas;
  }





  dibujalinea(150, 250, 100, 170);
  dibujalinea(150, 250, 200, 170);



  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(50,110);
  lienzo.lineTo(250,102);
  lienzo.lineTo(250,150);
  lienzo.lineTo(50,158);
  lienzo.lineTo(50,110);

  lienzo.moveTo(50,110);
  lienzo.lineTo(40,120);

  lienzo.moveTo(250,102);
  lienzo.lineTo(240,112);

  lienzo.moveTo(250,150);
  lienzo.lineTo(240,160);

  lienzo.moveTo(50,158);
  lienzo.lineTo(40,168);

  lienzo.stroke();

  lienzo.beginPath();
  lienzo.strokeStyle = "black";
  lienzo.moveTo(40,120);
  lienzo.lineTo(240,112);
  lienzo.lineTo(240,160);
  lienzo.lineTo(40,168);
  lienzo.lineTo(40,120);
  lienzo.stroke();
  lienzo.closePath();
}


console.log(window);
