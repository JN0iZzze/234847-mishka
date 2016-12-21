var map;
function initMap() {
  var myLatLng = {lat: 59.9366266, lng: 30.3203428};
  var map = new google.maps.Map(document.getElementById('contact-map'), {
    center: myLatLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  var image = 'img/icon-map-pin.svg';
  service.getDetails({
    placeId: 'ChIJWeLeiQ8xlkYRsdVEHwWV3BA'
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: image
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  });
}
