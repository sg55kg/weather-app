import UserInput from './components/UserInput/UserInput';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import WeatherGroup from "./components/WeatherGroup/WeatherGroup";
import { useWeatherData } from './hooks/useWeatherData';

const App = () => {

    const { data, loading, error } = useWeatherData("London", "GB", { units: "metric"});

    return (
        <div className="container">
            <UserInput />
            {loading && !error && <Loading loading={loading} />}
            {error && <Error error={error} />}   
            {!error && !loading && <WeatherGroup data={data} />}       
        </div>
    )
}

export default App;