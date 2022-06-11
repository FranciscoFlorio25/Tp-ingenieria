
var sucursales = [
    {
        nombreSucursal: "Coniferos of quality",
        descripcion: "De las mejores plantas del mercado",
        foto: "https://cdn.pixabay.com/photo/2021/08/06/16/14/wicker-baskets-6526674_960_720.jpg",
        coordenadas: [-34.520608, -58.704060],
        horario: "8:00 A 19",
        direccion: "Jose Verdi"
    },
    {
        nombreSucursal: "El Secoya",
        descripcion: "Muy buenas plantas a precios excelentes",
        foto: "https://cdn.pixabay.com/photo/2019/11/11/16/49/pottery-4618917_960_720.jpg",
        coordenadas: [-34.524592, -58.693910],
        horario: "9:00 A 16",
        direccion: "Ernesto Martines"
    },
    {
        nombreSucursal: "Árboretums y flores",
        descripcion: "De lo mejor en plantas variadas",
        foto: "https://cdn.pixabay.com/photo/2018/02/20/02/00/reed-3166698_960_720.jpg",
        coordenadas: [-34.520583, -58.711063],
        horario: "8:00 A 19",
        direccion: "Manuel Suarez"
    }

];




function mostrarSucursales() {
    let nombre = document.getElementById("nombreSucursal").value;
    let mostrarTodos = document.getElementById("checkMostrarTodo").checked;
    limpiarBusqueda()
    eliminarMarcador();



    for (let i = 0; i < 3 && i < sucursales.length; i++) {

            let nombreFiltro = sucursales[i]["nombreSucursal"]
            let descripcionFiltro = sucursales[i]["descripcion"]
            let horarioFiltro = sucursales[i]["horario"]
            let foto = sucursales[i]["foto"]
            let coodenada = sucursales[i]["coordenadas"];
            let direccion = sucursales[i]["direccion"];
    
            document.getElementById("nombre" + (i + 1)).innerHTML = "Nombre:" + nombreFiltro.toUpperCase();
            document.getElementById("descripcion" + (i + 1)).innerHTML = "Descripcion: " + descripcionFiltro;
            document.getElementById("foto" + (i + 1)).style.backgroundImage = "url('" + foto + "')";
            document.getElementById("direccion" + (i + 1)).innerHTML = "Dirección: " + direccion;
    
         if (mostrarTodos)
                agregarMarcador(coodenada, nombreFiltro.toUpperCase() + " " + "Descripcion: " + descripcionFiltro + "\n  horario: " + horarioFiltro)
        }

}


function limpiarBusqueda() {

    for (let i = 1; i <= 3; i++) {
        document.getElementById("nombre" + i).innerHTML = "Nombre:";
        document.getElementById("descripcion" + i).innerHTML = "Descripcion:";
        document.getElementById("direccion" + i).innerHTML = "Direccion: ";
        document.getElementById("foto" + i).style.backgroundImage = null;
        document.getElementById("foto" + i).style.backgroundColor = "white";
    }
    eliminarMarcador();
}

function mostrarSucursalEnPantalla(num) {
    let check = document.getElementById("checkMostrarTodo").checked;
    seleccionar(num);
    if (!check) {
        eliminarMarcador();
        agregarMarcador(coordenada, nombreFiltro.toUpperCase() + " " + "Descripcion: " + descripcionFiltro + "\n  horario: " + horarioFiltro);
        llevarAlPunto(coordenada);
    }
    else
        llevarAlPunto(coordenada);
}


function limpiarDivs() {
    for (let i = 1; i <= 3; i++)
        document.getElementById("list" + i).style.backgroundColor = "cadetblue"

}

function seleccionar(num) {
    limpiarDivs()
    document.getElementById("list" + (num + 1)).style.backgroundColor = "#3b83bd"
}







