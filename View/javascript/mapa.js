
var map;
var marcador = [];
function bootstrap() {

    var baseLocation = [-34.520140, -58.704578];
    map = L.map('map').setView(baseLocation, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var cluster = L.markerClusterGroup();
    cluster.addTo(map);
}


function agregarMarcador(punto, mensaje) {

    let marker = L.marker(punto).bindPopup(mensaje, { closeOnClick: false, autoClose: false });

    marcador.push(marker);
    map.addLayer(marker);
    marker.openPopup()

}
function llevarAlPunto(coordenada) {
    map.setView(coordenada)
}



function eliminarMarcador() {

    for (let mark of marcador) {

        map.removeLayer(mark);
    }

    marcador = [];


}

