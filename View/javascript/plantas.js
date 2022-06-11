

const plantas = [{
    nombreEspecimen: 'Rosa',
    descripcion: 'Rosa roja con pocas espinas.',
    familia: 'rosaceae',
    fase:'En crecimiento',
    suelo:'Suelo neutro',
    imagen: '../img/rose1.jpg'
},

{
    nombreEspecimen: 'Rosa',
    descripcion: 'Rosa amarilla con algunas espinas.',
    familia: 'rosaceae',
    fase:'En crecimiento',
    suelo:'Suelo neutro',
    imagen: '../img/rose2.jpg'
},
{
    nombreEspecimen: 'Rosa',
    descripcion: 'Rosa con hermosa coloración.',
    familia: 'rosaceae',
    fase:'Totalmente madura',
    suelo:'Suelo neutro',
    imagen: '../img/rose3.jpg'
},

{
    nombreEspecimen: 'Petunia',
    descripcion: 'Petunia morada recientemente plantada.',
    familia: 'solanaceae',
    fase:'En crecimiento',
    suelo:'Suelo básico',
    imagen: '../img/petunia1.jpg'
},
{
    nombreEspecimen: 'Petunia',
    descripcion: 'Petunia roja en buen estado.',
    familia: 'solanaceae',
    fase:'Totalmente madura',
    suelo:'Suelo básico',
    imagen: '../img/petunia2.jpg'
},
{
    nombreEspecimen: 'Camellia',
    descripcion: 'Camellia roja recientemente plantada',
    familia: 'theaceae',
    fase:'En crecimiento',
    suelo:'Suelo ácido',
    imagen: '../img/camellia.jpg'
}
];



function buscarPorDato(datoPlanta, datoNuevo) {
    for (let index = 0; index <= plantas.length; index++) {
        if (datoPlanta.toLowerCase() === datoNuevo.toLowerCase()) {
            return plantas[index];
        }

    }
    return null;

}




function getPlantas() {

    var Table = document.getElementById("tabla");
    Table.innerHTML = "";



    //Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>

    var tblBody = document.createElement("tbody");

    plantaBuscada = document.getElementById('plant').value;

    if (plantaBuscada === "") {

        for (let plant of plantas) {



            var hilera = document.createElement("tr");

            //IMAGEN

            var imagenPlant = document.createElement("td");
            var img = document.createElement('img');
            var imagen = plant.imagen;
            img.setAttribute("src", imagen);
            imagenPlant.appendChild(img);
            hilera.appendChild(imagenPlant);

            //NOMBRE

            var nombrePla = document.createElement("td");
            var nombre = plant.nombreEspecimen;
            var textoNombre = document.createTextNode(nombre);
            nombrePla.appendChild(textoNombre);
            hilera.appendChild(nombrePla);

            //DESCRIPCION

            var descripcionPlant = document.createElement("td");
            var descripcion = plant.descripcion;
            var textoDescripcion = document.createTextNode(descripcion);
            descripcionPlant.appendChild(textoDescripcion);
            hilera.appendChild(descripcionPlant);

            //FAMILIA

            var familiaPlant = document.createElement("td");
            var familia = plant.familia;
            var textoFam = document.createTextNode(familia);
            familiaPlant.appendChild(textoFam);
            hilera.appendChild(familiaPlant);

            //FASE DE CRECIMIENTO

            var fasePlant = document.createElement("td");
            var fase = plant.fase;
            var textoFase = document.createTextNode(fase);
            fasePlant.appendChild(textoFase);
            hilera.appendChild(fasePlant);

            //SUELO

            var sueloPlant = document.createElement("td");
            var suelo = plant.suelo;
            var textoSuelo = document.createTextNode(suelo);
            sueloPlant.appendChild(textoSuelo);
            hilera.appendChild(sueloPlant);

            tblBody.appendChild(hilera);



        }
    } else
        for (let plant of plantas) {

            if (buscarPorDato(plant.nombreEspecimen, plantaBuscada)) {

                var hilera = document.createElement("tr");

                //IMAGEN

                var imagenPlant = document.createElement("td");
                var img = document.createElement('img');
                var imagen = plant.imagen;
                img.setAttribute("src", imagen);
                imagenPlant.appendChild(img);
                hilera.appendChild(imagenPlant);

                //NOMBRE

                var nombreArt = document.createElement("td");
                var nombre = plant.nombreEspecimen;
                var textoNombre = document.createTextNode(nombre);
                nombreArt.appendChild(textoNombre);
                hilera.appendChild(nombreArt);

                //DESCRIPCION

                var descripcionPlant = document.createElement("td");
                var descripcion = plant.descripcion;
                var textoDescripcion = document.createTextNode(descripcion);
                descripcionPlant.appendChild(textoDescripcion);
                hilera.appendChild(descripcionPlant);

                //FAMILIA

                var familiaPlant = document.createElement("td");
                var familia = plant.familia;
                var textoFam = document.createTextNode(familia);
                familiaPlant.appendChild(textoFam);
                hilera.appendChild(familiaPlant);

                //FASE DE CRECIMIENTO

                var fasePlant = document.createElement("td");
                var fase = plant.fase;
                var textoFase = document.createTextNode(fase);
                fasePlant.appendChild(textoFase);
                hilera.appendChild(fasePlant);

                //SUELO

                var sueloPlant = document.createElement("td");
                var suelo = plant.suelo;
                var textoSuelo = document.createTextNode(suelo);
                sueloPlant.appendChild(textoSuelo);
                hilera.appendChild(sueloPlant);

                tblBody.appendChild(hilera);

            }

        }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);


}

function buscar() {

    var Table = document.getElementById("tabla");
    Table.innerHTML = "";


    var body = document.getElementsByTagName("body")[0];
    var tblBody = document.createElement("tbody");

    plantaBuscada = document.getElementById('plant').value;



    for (let plant of plantas) {
        if (buscarPorDato(plant.nombreEspecimen, plantaBuscada) || buscarPorDato(plant.familia, plantaBuscada)) {


            var hilera = document.createElement("tr");

            //IMAGEN

            var imagenPlant = document.createElement("td");
            var img = document.createElement('img');
            var imagen = plant.imagen;
            img.setAttribute("src", imagen);
            imagenPlant.appendChild(img);
            hilera.appendChild(imagenPlant);


            //NOMBRE

            var nombreArt = document.createElement("td");
            var nombre = plant.nombreEspecimen;
            var textoNombre = document.createTextNode(nombre);
            nombreArt.appendChild(textoNombre);
            hilera.appendChild(nombreArt);


            //DESCRIPCION

            var descripcionPlant = document.createElement("td");
            var descripcion = plant.descripcion;
            var textoDescripcion = document.createTextNode(descripcion);
            descripcionPlant.appendChild(textoDescripcion);
            hilera.appendChild(descripcionPlant);


            //FAMILIA

            var familiaPlant = document.createElement("td");
            var familia = plant.familia;
            var textoFam = document.createTextNode(familia);
            familiaPlant.appendChild(textoFam);
            hilera.appendChild(familiaPlant);

            //FASE DE CRECIMIENTO

            var fasePlant = document.createElement("td");
            var fase = plant.fase;
            var textoFase = document.createTextNode(fase);
            fasePlant.appendChild(textoFase);
            hilera.appendChild(fasePlant);

            //SUELO

            var sueloPlant = document.createElement("td");
            var suelo = plant.suelo;
            var textoSuelo = document.createTextNode(suelo);
            sueloPlant.appendChild(textoSuelo);
            hilera.appendChild(sueloPlant);

            tblBody.appendChild(hilera);

        }

        tabla.appendChild(tblBody);
        body.appendChild(tabla);


    }



}

