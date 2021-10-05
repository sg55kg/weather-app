const Temperature = ({current, min, max}) => {
    return (
        <div className="temp">
            <h4>{current}&deg;</h4>
            <div className="minor-temps">
            <p>{min}&deg;</p>
            <p>{max}&deg;</p>
            </div>
        </div>
    )
}

export default Temperature;