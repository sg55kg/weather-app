import './styles.css';

const UserInput = () => {

    const setUserInput = (city, country) => {
        return null;
    }

    return (
        <div className="user-input-div">
            <p>City</p>
            <input type="text" name="city" placeholder="Enter city" />
            <p>Country</p>
            <input type="text" name="country" placeholder="Enter country" />
        </div>
    )
}

export default UserInput;