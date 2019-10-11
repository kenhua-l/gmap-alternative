var bo = true;
var bo1 = true;
var map;
var ctaLayer = new google.maps.KmlLayer({
    url: '/assets/kml/haze-wind.kml',
    preserveViewport: true,
    clickable: false,
    zIndex: 9999,
    suppressInfoWindows: false
});
var imageBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-18.6, 86),
            new google.maps.LatLng(32.6, 144));

var historicalOverlay = new google.maps.GroundOverlay('/assets/images/satellite.png', imageBounds);
function showMarkers() {
    var mapcanvas = document.getElementById("map");
    if (bo) {
        ctaLayer = new google.maps.KmlLayer({
            url: '/assets/kml/haze-wind.kml',
            preserveViewport: true,
            clickable: false,
            zIndex: 9999,
            suppressInfoWindows: false
        });
        ctaLayer.setMap(map);
        bo = false;

    } else {
        ctaLayer.setMap(null);
        bo = true;
    }
}
function toggleOverlay() {
    if (bo1) {
        historicalOverlay = new google.maps.GroundOverlay('/assets/images/satellite.png', imageBounds);
        historicalOverlay.setMap(map);
        bo1 = false;
    } else {
        historicalOverlay.setMap(null);
        bo1 = true;
    }
}


var northEast = new google.maps.LatLng(30, 140);
var southWest = new google.maps.LatLng(-15, 90);
var allowedBounds = new google.maps.LatLngBounds(southWest, northEast);

function checkBounds() {
    if ((allowedBounds.getNorthEast().lat() < (map.getBounds().getNorthEast().lat())) || (allowedBounds.getSouthWest().lat() > (map.getBounds().getSouthWest().lat())) || (allowedBounds.getNorthEast().lng() < (map.getBounds().getNorthEast().lng())) || (allowedBounds.getSouthWest().lng() > (map.getBounds().getSouthWest().lng()))) {
        map.setCenter(new google.maps.LatLng(5, 115));
    }
}

function initMap() {
    var mapProp = {
        //center: new google.maps.LatLng(6, 110),
        center: new google.maps.LatLng(1.3, 103.8),
        zoom: 5,
        minZoom: 4,
        streetViewControl: false,
        panControl: false,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        disableScrollSheelZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map")
        , mapProp);

    //map.fitBounds(initBounds);

    //Listen for the dragend event
    google.maps.event.addListener(map, 'center_changed', function () {
        window.setTimeout(function () {
            checkBounds();
        }, 1000);
    });
    var hazeBound = new google.maps.KmlLayer({
        url: '/assets/kml/haze-boundary.kml',
        preserveViewport: true,
        clickable: false
    });
    hazeBound.setMap(map);
    var ctaLayer1 = new google.maps.KmlLayer({
        url: '/assets/kml/haze-hotspot.kml',
        preserveViewport: true,
        clickable: false,
        suppressInfoWindows: false
    });
    ctaLayer1.setMap(map);
    return map;
}

google.maps.event.addDomListener(window, 'load', initMap);
