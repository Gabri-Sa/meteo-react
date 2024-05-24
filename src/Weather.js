import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Oxford",
    date: "Thursday 9.30pm",
    description: "Cloudy",
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    humidity: 70,
    wind: 10,
  };

  return (
    <div className="Weather">
      <header>
        <form className="search-form">
          <input
            type="Search"
            placeholder="Enter a city..."
            required
            class="search-form-input"
          />

          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>

      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city"> {weatherData.city}</h1>
            <p class="weather-app-details">
              <span> Last updated:{weatherData.date} </span>,
              <span>{weatherData.description}</span>
              <br />
              Humidity: <strong>{weatherData.humidity}</strong>
              Wind: <strong>{weatherData.wind}</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div>
              <img src={weatherData.imgUrl} alt="" class="weather-app-icon" />
            </div>

            <div className="weather-app-temperature"> 20 </div>
            <div className="weather-app-unit"> °C </div>
          </div>
          <footer>
            This project was coded by <em>Gabriela Saftoiu</em>, is open sourced
            on
            <a
              href="https://github.com/Gabri-Sa/World-Clock-Project"
              target="_blank"
            >
              {" "}
              GitHub{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://world-clock-shecodes-add-on-project.netlify.app/"
              target="_blank"
            >
              {" "}
              Netlify
            </a>
          </footer>
        </div>
        <div className="weather-forecast"></div>
        <br />
      </main>
    </div>
  );
}
