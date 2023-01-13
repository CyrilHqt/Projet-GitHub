const API_KEY = "be4afa03f168cfa15bf1a322864f9c1e";

const currentWeather = document.querySelector("img");
const currentDegre = document.querySelector(".degre");
const currentPosition = document.querySelector(".localisation");
const currentHour = document.getElementsByClassName("current-hour");
const currentTemp = document.getElementsByClassName("current-temp");
const felt = document.querySelector('.felt')
const loader = document.querySelector('.dot-group');
const responseAPI = document.querySelector('.top');

let currentLatitude;
let currentLongitude;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            currentLatitude = position.coords.latitude;
            currentLongitude = position.coords.longitude;
            console.log(
                currentLatitude,
                currentLongitude,
            );
            // getCurrentPositionUser()
        });
    }
});

async function getInfoAPi() {
  try {
    const request = await fetch(
      `https:api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}`
    );

    if (!request.ok) {
      throw new Error(`Erreur: ${request.status}`);
    }

    const data = await request.json();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", getInfoAPi);