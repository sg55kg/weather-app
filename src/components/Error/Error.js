const Error = ({ error }) => {
    return (
        <div>
            <h3>There was an issue loading this</h3>
            <p>{error}</p>
        </div>
    )
}

export default Error;