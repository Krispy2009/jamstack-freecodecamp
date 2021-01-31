function success(pos) {
  var lat = pos.coords.latitude;
  var lon = pos.coords.longitude;
  var acc = pos.coords.accuracy;

  const url = `/.netlify/functions/weatherapi?lat=${lat}&lon=${lon}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#city").textContent = data.name;
      document.querySelector("#temp").textContent = data.main.temp + "°C";
      document.querySelector("#main").textContent = data.weather[0].main;
      document.querySelector("#desc").textContent = data.weather[0].description;

      document.querySelector("#weather").classList.remove("hidden");
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
