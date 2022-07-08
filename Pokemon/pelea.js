
//INSERCION DE IMAGEN DE FONDO
/*var pk = document.getElementById("fondo");
var papel = pk.getContext("2d");

var background = {
    url: "pokemonbackground1.png"
}
background.objeto = new Image();
background.objeto.src = background.url;
papel.drawImage(background.objeto, 0, 0);
*/

//Crear array con la ubicacion de las imagenes
var imagenes = [];
imagenes["Jigglypuff"] = "jigglypuff.png";
imagenes["Evee"] = "evee.png";
imagenes["Bulbasaur"] = "bulbasaur.png";



//Aqui estamos creando las variables de los pokemon existentes
var jigglypuff = new Pokemon("Jigglypuff", 150, 60, "aire");
var evee = new Pokemon("Evee", 100, 80, "tierra");
var bulbasaur = new Pokemon("Bulbasaur", 110, 70, "planta");

//CREA ARRAY CON LOS POKEMON QUE VOY ATRAPANDO
var coleccion = [];
coleccion.push(new Pokemon("Jigglypuff", 150, 60, "aire"));
coleccion.push(new Pokemon("Evee", 100, 80, "tierra"));
coleccion.push(new Pokemon("Bulbasaur", 110, 70, "planta"));

//MUESTRA POKEMONES
for (var i of coleccion){
    i.mostrar();
}