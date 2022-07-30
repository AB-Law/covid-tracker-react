import Cards from './components/Cards/Cards';
import styles from './App.module.css';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import React, { useState, useEffect } from 'react';

import image from './images/image.png';


const App = () => {

  const [covidAPI, setCovidAPI] = useState();


  const url = 'https://api.covid19api.com/summary'

  const [apiCall, setAPICall] = useState();
  const [newData, setNewData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCovidAPI(data);
      setAPICall(data);

    }
    getData();
  }, [])

  // from data, assign the country object to the country array

  const onCountryChange = (event) => {

    event.preventDefault();
    for (let key in apiCall.Countries) {
      if (apiCall.Countries[key].Country === event.target.value) {
        setNewData(apiCall.Countries[key]);
      }
    }

  }
  if (!newData) {
    return (
      <div >
        {covidAPI ?
          <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <h1 align="center">Global</h1>
            <Cards data={apiCall.Global} />
            <CountryPicker data={covidAPI.Countries} onValueChange={onCountryChange} />
            <br></br>

            <Cards data={apiCall.Global} />
            <Chart data={apiCall.Global} />
          </div>
          :
          <React.Fragment>
            <img className={styles.image} src={image} alt="COVID-19" />
            <h1>Loading...</h1>
          </React.Fragment>
        }


      </div>
    );
  }


  else {
    return (
      <div >
        {covidAPI ?
          <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <h1 align="center">Global</h1>
            <Cards data={apiCall.Global} />
            <CountryPicker data={covidAPI.Countries} onValueChange={onCountryChange} />

            <Cards data={newData} />
            <Chart data={newData} />
          </div>
          :
          <React.Fragment>
            <img className={styles.image} src={image} alt="COVID-19" />
            <h1>Loading...</h1>
          </React.Fragment>
        }


      </div>
    );
  }
}

export default App;
