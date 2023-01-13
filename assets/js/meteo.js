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
            getCurrentPositionUser();
            getWeatherNY();
            getWeatherLondon();
            getWeatherPekin()
        });
    }
});

/**
 * This function allow to getCurrentPosition of user. This function it'use in load document
 */
const getCurrentPositionUser = async () => {
  if (currentLatitude !== "" && currentLongitude !== "") {
      try {
          let request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${currentLatitude}&lon=${currentLongitude}&units=metric&appid=${API_KEY}`);

          if (!request.ok) {
              throw new Error(`Erreur: ${request.status}`)
          } else {
              loader.style.display = "none";
              responseAPI.style.display = "block";

          }

          const response = await request.json();
          console.log(response)

          currentDegre.textContent = Math.trunc(response.list[0].main.temp) + "°";
          currentPosition.textContent = response.city.name;
          felt.textContent = response.list[0].main.feels_like + "°";

          const tabofPrevision = response.list;

          console.log(tabofPrevision, 'tabofPrevision');

          for (let i = 0; i < tabofPrevision.length; i++) {
              currentHour[i].textContent = new Date(tabofPrevision[i].dt_txt).getHours() + 'h'
              currentTemp[i].innerHTML = Math.trunc(tabofPrevision[i].main.temp) + "°";
          }

      } catch (error) {
          console.log(error);
      }
  }
}

const choiceCity = document.querySelector('#choice-city');
const form = document.querySelector('form')

/**
* this function allow to get weather by city with query string
*/
const getCurrentPositionByCity = async () => {

  if (choiceCity.value.length) {
      choiceCity.value.toLowerCase();
      try {
          let request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${choiceCity.value}&units=metric&appid=${API_KEY}`);


          if (!request.ok) {
              throw new Error(`Erreur: ${request.status}`)
          }

          const response = await request.json();
          console.log(response)


          currentDegre.textContent = Math.trunc(response.list[0].main.temp) + "°";
          currentPosition.textContent = response.city.name;
          felt.textContent = response.list[0].main.feels_like + "°";

          const tabofPrevision = response.list;

          console.log(tabofPrevision, 'tabofPrevision');

          for (let i = 0; i < tabofPrevision.length; i++) {
              currentHour[i].textContent = new Date(tabofPrevision[i].dt_txt).getHours() + 'h'
              currentTemp[i].innerHTML = Math.trunc(tabofPrevision[i].main.temp) + "°";
          }

      } catch (error) {
          console.log(error);
      }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getCurrentPositionByCity();
})


// NY

const localisationNY = document.querySelector('.localisation-ny');
const degreNY = document.querySelector('.degre-ny');
const feltNY = document.querySelector('.felt-ny');

const getWeatherNY = async () => {
    if (currentLatitude !== "" && currentLongitude !== "") {
        try {
            let request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=40.712784&lon=-74.005941&units=metric&appid=${API_KEY}`);
  
            if (!request.ok) {
                throw new Error(`Erreur: ${request.status}`)
            } 
  
            const response = await request.json();
            console.log(response)
  
            degreNY.textContent = Math.trunc(response.list[0].main.temp) + "°";
            localisationNY.textContent = response.city.name;
            feltNY.textContent = response.list[0].main.feels_like + "°";
  
  
        } catch (error) {
            console.log(error);
        }
    }
  }
// LONDON

const localisationLondon = document.querySelector('.localisation-london');
const degreLondon = document.querySelector('.degre-london');
const feltLondon = document.querySelector('.felt-london');

const getWeatherLondon = async () => {
    if (currentLatitude !== "" && currentLongitude !== "") {
        try {
            let request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=51.509093&lon=-0.137565&units=metric&appid=${API_KEY}`);
  
            if (!request.ok) {
                throw new Error(`Erreur: ${request.status}`)
            } 
  
            const response = await request.json();
            console.log(response)
  
            degreLondon.textContent = Math.trunc(response.list[0].main.temp) + "°";
            localisationLondon.textContent = response.city.name;
            feltLondon.textContent = response.list[0].main.feels_like + "°";
  
  
        } catch (error) {
            console.log(error);
        }
    }
  }

// PEKIN

const localisationPekin = document.querySelector('.localisation-pekin');
const degrePekin = document.querySelector('.degre-pekin');
const feltPekin = document.querySelector('.felt-pekin');

const getWeatherPekin = async () => {
    if (currentLatitude !== "" && currentLongitude !== "") {
        try {
            let request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=39.904211&lon=-116.407395&units=metric&appid=${API_KEY}`);
  
            if (!request.ok) {
                throw new Error(`Erreur: ${request.status}`)
            } 
  
            const response = await request.json();
            console.log(response)
  
            degrePekin.textContent = Math.trunc(response.list[0].main.temp) + "°";
            localisationPekin.textContent = response.city.name;
            feltPekin.textContent = response.list[0].main.feels_like + "°";
  
  
        } catch (error) {
            console.log(error);
        }
    }
  }