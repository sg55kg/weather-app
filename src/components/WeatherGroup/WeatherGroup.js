import Weather from '../Weather/Weather';
import './styles.css';

const WeatherGroup = ({ data }) => {
    console.log(data);
    return (
        <div className="weather-group">
        {data.map((dataDay, idx) => (
            <Weather today={idx === 0} key={dataDay.date} dataDay={dataDay} />
        ))}
        </div>
    )
}

export default WeatherGroup;