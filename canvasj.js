var texto = document.getElementById("textoLineas");

var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick); //escucha eventos del boton -- No se cierra dibujo cpn click con parentesis porque no quiero que el codigo ejecute en algun momento solo se ejecuta cuando tocamos click


var d = document.getElementById("dibujito");
var ancho = d.width; // nos da el ancho (300px) para poder dividirlo por las lineas y tener el valor d la funcion 

var lienzo = d.getContext("2d"); // contexto 2d o 3d


function dibujarLinea(color, xini, yini, xfinal, yfinal) {

    lienzo.beginPath(); // arrancar trazo -- iniciar camino
    lienzo.strokeStyle = color; // color de linea -- se comporta como variable
    lienzo.moveTo(xini, yini); // posicion para dibujar la linea
    lienzo.lineTo(xfinal, yfinal); // traza linea
    lienzo.stroke(); // dibuja la linea
    lienzo.closePath(); // cierra trazo


}



function dibujoPorClick() {

    var lineas = parseInt(texto.value); // es igual al num ingresado
    var i = 0;
    var yi, xf;
    var colorlinea = "blue";
    var espacio = ancho / lineas;



    while (i < lineas) {

        yi = espacio * i;
        xf = espacio * (i + 1);
        dibujarLinea("black", 0, yi, xf, 300); // xini yini xfinal yfinal
        console.log("linea" + i); // para ver si funciona la var -- i = 0 a 29 
        i = i + 1; // cierro ciclo infinito o i++ // cant lineas
    }

    for (i = 0; i < lineas; i++) { // espejo con for

        yi = espacio * i;
        xf = espacio * (i + 1);
        dibujarLinea("black", 300, yi, xf, 0); // xini yini xfinal yfinal

    }

    dibujarLinea(colorlinea, 1, 1, 1, 299); // antialising
    dibujarLinea(colorlinea, 1, 299, 299, 299); // antialising); // antialising

    dibujarLinea(colorlinea, 299, 1, 1, 1); // antialising
    dibujarLinea(colorlinea, 299, 299, 299, 1); // antialising); // antialising

    //declaramos una funcion

    // llamamos funcion
    dibujarLinea("black", 0, 0, 10, 300);
    dibujarLinea("black", 0, 10, 20, 300);

    // llamamos funcion
    dibujarLinea("black", 0, 0, 10, 300);
    dibujarLinea("black", 0, 10, 20, 300);

    alert("No me toques ahi " + x);
    console.log(texto); // usamos para ver como esta construido el objeto ej funcion

}