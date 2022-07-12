//declaracion de las principales variables
var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;
var totalEntregado = 0;
var resultado = document.getElementById("resultado");
var totalC = document.getElementById("totalc");
var b = document.getElementById("boton");
b.addEventListener("click", entregarDinero);

//Creacion de la clase billete para uso general del cajero
class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();

        this.imagen.src = imagenes[this.valor];
        this.imagen.width = 150;
        this.imagen.height = 100;
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
    }
}

//Agregar imagenes de billetes
var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";

//creacion de la variable caja agregando los billetes 
var caja = [];
caja.push( new Billete(100, 4) );
caja.push( new Billete(50, 4) );
caja.push( new Billete(20, 8) );
caja.push( new Billete(10, 10) );

//mostrar el total disponible en caja
var totalCaja = 0;
for(var bi of caja)
{
    totalCaja += (bi.valor * bi.cantidad);
}
totalC.innerHTML = "Total disponible en el Cajero: $" + totalCaja;
totalC.innerHTML += "<br />Total entregado: $" + totalEntregado;


//funcion de entrega de dinero y validaciones internas
function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    if (dinero % 10 == 0 && dinero > 0 && totalCaja >= dinero)
    {
        for(var bi of caja)
        {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles));
            dinero -= (bi.valor * papeles);
            totalCaja -= (bi.valor * papeles);
            totalEntregado += (bi.valor * papeles);
        }
        resultado.innerHTML = "Billetes entregados: <br />";
        for (var ent of entregado)
        {
            if (ent.cantidad > 0)
            {
            resultado.innerHTML += ent.cantidad + " billetes de $" + ent.valor + "<br />";
            }
            for (var i=0; i < ent.cantidad; i++)
            {
                resultado.innerHTML += "<img src=" + ent.imagen.src + "/>";
            }
            resultado.innerHTML += "<br />";
        }
    }
    else if(dinero <= 0){alert("Ingrese cantidad mayor a 0!")}
    else if(dinero % 10 != 0){alert("No tenemos billetes de tal denominacion")}
    else if(totalCaja < dinero){alert("Total excede cantidad disponible en el cajero!")}

    totalC.innerHTML = "Total disponible en el Cajero: $" + totalCaja;
    totalC.innerHTML += "<br />Total entregado: $" + totalEntregado;
}







