class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);


    var totalCaja = 0;
    for(var bi of caja)
    {
        totalCaja += (bi.valor * bi.cantidad);
    }
    
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
    }
    }
    else if(dinero <= 0){alert("Ingrese cantidad mayor a 0!")}
    else if(dinero % 10 != 0){alert("No tenemos billetes de tal denominacion")}
    else if(totalCaja < dinero){alert("Total excede cantidad disponible en el cajero!")}

    document.write("")
}



var caja = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;




var b = document.getElementById("boton");
b.addEventListener("click", entregarDinero);