//WEATHER APP
const weatherForm = document.querySelector(".weatherForm");
const card = document.querySelector(".card");
const apiKey = "95758f5be9664885cdc4a5fd4a7be057";
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const lat = latitude.value;
  const lon = longitude.value;

  if (lat && lon) {
    try {
      const weatherData = await getWeatherData(lat, lon);
      displayWeatherInfo(weatherData);
    } catch (err) {
      console.error(err);
      displayError("Failed to fetch weather data.");
    }
  } else {
    displayError("Please enter both latitude and longitude.");
  }
});

async function getWeatherData(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("could not fetch data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempdisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempdisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempdisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempdisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId <= 300:
      return "🌧️";
    case weatherId >= 300 && weatherId <= 400:
      return "⛈️";
    case weatherId >= 500 && weatherId <= 600:
      return "🌁";
    case weatherId >= 600 && weatherId <= 700:
      return "❄️";
    case weatherId >= 700 && weatherId <= 800:
      return "❄️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId <= 810:
      return "🌨️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
