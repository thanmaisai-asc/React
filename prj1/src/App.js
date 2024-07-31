import React, { useState, useEffect } from 'react';
import { countries } from 'countries-list';
import './App.css';
// require('dotenv').config();

function App() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('tamilnadu');
  const [state, setState] = useState('tamilnadu');

  // API KEY
  const apiKey = process.env.REACT_APP_API_KEY;

  // Side effect
  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
    fetch(apiUrl)
      .then((res) => res.json())  
      .then((data) => setApiData(data));
  }, [state, apiKey]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToCelsius = (k) => {
    return (k - 273.15).toFixed(2);
  };
  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <h2>React Weather App</h2>
      </header>
      <div className="container">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <div className="input-container">
                <label htmlFor="location-name" className="col-form-label">
                  Enter Location :
                </label>
                <input
                  type="text"
                  id="location-name"
                  className="form-control"
                  onChange={inputHandler}
                  value={getState}
                />
              </div>
              <button className="btn btn-primary mt-2" onClick={submitHandler}>
                Search
              </button>
            </div>
          </div>
  
          <div className="card mt-3">
            {apiData.main ? (
              <div className="card-body text-center">
                <div className="nested-card">
                  <img
                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                  />
  
                  <p className="h2">
                    {kelvinToCelsius(apiData.main.temp)}&deg; C
                  </p>
  
                  <p className="h5">
                    <i className="fas fa-map-marker-alt"></i>{' '}
                    <strong>{apiData.name}</strong>
                  </p>
  
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>
                        <i className="fas fa-temperature-low"></i>{' '}
                        <strong>
                          {kelvinToCelsius(apiData.main.temp_min)}&deg; C
                        </strong>
                      </p>
                      <p>
                        <i className="fas fa-temperature-high"></i>{' '}
                        <strong>
                          {kelvinToCelsius(apiData.main.temp_max)}&deg; C
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        {' '}
                        <strong>{apiData.weather[0].main}</strong>
                      </p>
                      <p>
                        <strong>
                          {' '}
                          {countries[apiData.sys.country].name}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}  

export default App;
