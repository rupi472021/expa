// import React from 'react'
// import ReactWeather, { useOpenWeather } from 'react-open-weather';


// export default function FCWeather() {
//     const weather = () => {
//         const { data, isLoading, errorMessage } = useOpenWeather({
//             key: '9bbac452aaafb0e2f656ce8302bf4ce4',
//             lat: '48.137154',
//             lon: '11.576124',
//             lang: 'en',
//             unit: 'metric', // values are (metric, standard, imperial)
//         });
//         return (
//             <div>
//                 <ReactWeather
//                     isLoading="TRUE"
//                     errorMessage="error massage"
//                     data={data}
//                     lang="en"
//                     locationLabel="Munich"
//                     unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
//                     showForecast
//                 />
//             </div>
//         )
//     }
// }
