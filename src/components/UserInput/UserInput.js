import './styles.css';

const UserInput = ({ city, setCity, country, setCountry }) => {


    //useWeatherData(`${city}`, `${country}`, { units: "imperial"});

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value);
        setCountry(e.target.elements.city.value);
    }

    return (
        <div className="user-input-div">
        
            <form onSubmit={handleSubmit}>
                <p>City</p>
                <input type="text" name="city" placeholder="Enter city" autoComplete="off"  />
                <p>Country</p>
                <input type="text" name="country" placeholder="Enter country" autoComplete="off" />
                <button type="submit">Enter</button>
            </form>

        </div>
    )
}

export default UserInput;