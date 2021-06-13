import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Weathers = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '4816878d1e2d205f0025f5817d53cd67',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
      
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />

    
  );
};

export default Weathers; //לייצא אותו לקובץ app.js