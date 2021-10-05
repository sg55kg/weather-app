import { WEATHER_ICON } from '../../../constants';

const Image = ({ id }) => {
    return (
        <img src={`http://openweathermap.org/img/w/${id}.png`} alt={WEATHER_ICON[id]}/>
    )
}

export default Image;