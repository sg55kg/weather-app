import UserInput from './components/UserInput/UserInput';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import WeatherGroup from "./components/WeatherGroup/WeatherGroup";
import { useWeatherData } from './hooks/useWeatherData';

import { useState } from 'react';

const App = () => {

    const [city, setCity] = useState('London');
    const [country, setCountry] = useState('GB');

    const { data, loading, error } = useWeatherData(`${city}`, `${country}`, { units: "imperial"});

    

    return (
        <div className="container">
            <UserInput city={city} setCity={setCity} country={country} setCountry={setCountry} />
            {loading && !error && <Loading loading={loading} />}
            {error && <Error error={error} />}   
            {!error && !loading && <WeatherGroup data={data} />}       
        </div>
    )
}

export default App;