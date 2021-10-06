
const Image = ({ id }) => {
    return (
        <img src={`http://openweathermap.org/img/w/${id}.png`} alt="pic" />
    )
}

export default Image;