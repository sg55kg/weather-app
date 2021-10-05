import { useState, useEffect } from 'react';
import { API_KEY } from '../constants';

const createApiUrl = (city, country, { units = 'standard'}) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${units}&appid=${API_KEY}`;
}

const isDesiredIndex = (_,i) => i % 8 === 0;

 //@param {String} city 
// @param {Object} options
// @property {string} [options.units='standard']

// @returns {Object} 
// @property {string|null} error 

// @property {Boolean} loading 

// @property {Object[]} data

const useWeatherData = (city, country, options) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    const apiUrl = createApiUrl(city, country, options);

    useEffect(() => {
        const getWeatherData = async () => {
            const res = await fetch(apiUrl);

            try {
                if(!res.ok) {
                    throw new Error(`${res.status}`);
                }
                const data = await res.json();

                const dataArr = data.list.filter(isDesiredIndex).map((d) => {
                    const {dt_txt, main, weather } = d;

                    const icon = weather[0].icon;
                    const current = main.temp;
                    const min = main.temp_min;
                    const max = main.temp_max;
                    const date = new Date(dt_txt).toLocaleDateString('en-US', {
                        weekday: 'short'
                    });
                    console.log(icon);
                    console.log(current)
                    console.log(min)
                    return {icon, current, min, max, date}
                });
                console.log(dataArr)

                setData(dataArr);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        }
        getWeatherData();
    }, [apiUrl]);

    return {
        loading: isLoading,
        error,
        data
    }
}

export { useWeatherData };