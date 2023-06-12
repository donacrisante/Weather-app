export default function HeaderList({isGoodWeather}) {
    return (
        <h2>{isGoodWeather === true ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"}</h2>
    )
}