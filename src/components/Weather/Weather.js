import Weekday from './Weekday/Weekday';
import Image from './Image/Image';
import Temperature from './Temperature/Temperature';
import './styles.css';

const Weather = ({ dataDay, today }) => {
    return (
        <div className={today ? "today" : "weather-card"}>
            <Weekday day={today ? 'Today' : dataDay.date} />
            <Image id={dataDay.icon} />
            <Temperature current={dataDay.current} min={dataDay.min} max={dataDay.max} />
        </div>
    )
}

export default Weather;