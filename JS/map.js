function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: 11
        })
    });

}

function onGeoError() {
    alert("Can't find where you are. map service falied")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)