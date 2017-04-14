let promise = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position);
    });
});

promise.then(function (position) {
    var map = document.getElementById('map');
    var src = `http://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude}, 
    ${position.coords.longitude}&zoom=18&size=500x500&sensor=true`;
    map.setAttribute('src', src);
});