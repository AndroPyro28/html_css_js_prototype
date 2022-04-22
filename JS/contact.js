const errorLocation = error => {
  console.log('error', error)
}

const successLocation = position => {
  //  const {longitude, latitude} = position.coords;
    const topNotch = [120.84209846945171, 14.84324365723167]
   setUpMap(topNotch);
} 

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

  const setUpMap = (center) => {
    mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcm9weXJvMjgiLCJhIjoiY2wyOXlxcWJ2MDBhYzNjczV6dGp2OGx3MiJ9.A8TYyGaDsKLqwqtyy5XjVA";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom:15,
    });

    const nav = new mapboxgl.NavigationControl();
    const directions = new MapboxDirections({accessToken: mapboxgl.accessToken})
    const geocoder = new MapboxGeocoder({accessToken: mapboxgl.accessToken, marker: {color: 'red',},mapboxgl: map,});

      new mapboxgl.Marker({color: "red"}).setLngLat(center).addTo(map);

      const locator = new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        showUserHeading: true,
        trackUserLocation: true,
        // When active the map will receive updates to the device's location as it changes.
        // trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        // showUserHeading: true
        });

    // map.addControl(mapControl, 'top-left');
    // map.addControl(directions, "top-left");
    // map.addControl(geocoder)
    map.addControl(new mapboxgl.AttributionControl())
    map.addControl(nav, "top-left");
    map.addControl(locator);

    
  }

