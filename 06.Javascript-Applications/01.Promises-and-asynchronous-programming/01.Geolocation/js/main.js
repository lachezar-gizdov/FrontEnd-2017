let promise = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position);
    });
});

promise.then(function (position) {
    let map = document.getElementById('map'),
        posLatitude = position.coords.latitude,
        posLongitude = position.coords.longitude,
        src = `http://maps.googleapis.com/maps/api/staticmap?size=600x500&center=${posLatitude}, ${posLongitude}&zoom=15`;
    map.setAttribute('src', src);
});