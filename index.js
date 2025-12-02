function refresh(response) {
  let temperature = document.querySelector(".weather-app-temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.name;
}
function searchCity(city) {
  let apikey = "a4d1ffe2f22e7da134fe0f4895a8bed3";
  apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  axios.get(apiurl).then(refresh);
}
function SearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");
  searchCity(searchInput.value);
}

let formBtn = document.querySelector(".search-form");
formBtn.addEventListener("submit", SearchSubmit);
