const WeatherData = (props) => {
    return (
        <section>
            <p>Today is {props.day} {props.time}, and it is {props.conditions}.</p>
        </section>
    )
}

export default WeatherData