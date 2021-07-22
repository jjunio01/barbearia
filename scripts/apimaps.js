function initMap() {

    var location = {lat: -8.8769566, lng: -36.4619921 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
}
