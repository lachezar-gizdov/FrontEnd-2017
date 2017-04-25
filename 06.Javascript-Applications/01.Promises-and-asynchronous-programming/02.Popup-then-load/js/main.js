let timeout = 2000;
let promise = new Promise(function (resolve, reject) {
    resolve(alert("Redirecting to Stackoverflow"));
});

promise.then(value => {
    setTimeout(function () {
        window.location.href = "http://stackoverflow.com";
    }, timeout);
});