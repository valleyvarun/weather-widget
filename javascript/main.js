
// Select DOM elements
// Input elements
let input = document.querySelector('.zipcode');
let btn = document.querySelector(".search-button"); //".classname"
let form = document.querySelector("form") //"blockname"

//Output elements
let CITY_NAME = document.querySelector('.city_name');
let CITY_TEMP = document.querySelector('.temperature');
let image = document.querySelector("img")


const API_KEY = config.WEATHER_API_KEY;


function getWeatherData(zip) {
    let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},IN&appid=${API_KEY}`;
//Use backticks ``   not '' or ""
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // store the data in a variable of our choosing
      let local_weather_data = data;
      // log the data to the browser console
      console.log(local_weather_data);

      // .textContent changes the text of the HTML block to = xyz
      CITY_NAME.textContent = local_weather_data.name;

      let temp_kelvin = local_weather_data.main.temp;
        console.log(typeof temp_kelvin); //tells the datatype stored in the variable
      let temp_celsius = Math.round(temp_kelvin - 273);
      CITY_TEMP.textContent = temp_celsius + " °C";

      let WEATHER_ICON = local_weather_data.weather[0].icon;
      image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
    });
    form.reset();
    input.focus();
}

function getZipCode(e) {
    e.preventDefault();
    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', getZipCode);

