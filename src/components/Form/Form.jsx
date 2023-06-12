export default function Form({onAddActivity}) {

    function handleSubmit(event) {
        event.preventDefault();

        /* const formData = new FormData(event.target);
        const data = Object.fromEntries(formData); */
        const data = {name:event.target.elements.activity.value, isForGoodWeather:event.target.elements.checkbox.checked};
        console.log(data);
        event.target.reset();
        event.target.elements.activity.focus();
        onAddActivity(data);

        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Das Wetter in Genf</h1>
            <label htmlFor="activity_name">Activity name:</label>
            <input name="activity_name" id="activity" type="text" aria-label="insert_activity"/>
            <label htmlFor="weather_checkbox">Good-weather activity:</label>
            <input name="weather_checkbox" id="checkbox" aria-label="good_weather_required" type="checkbox"/>
            <button type="submit">Add activity</button>
        </form>
        </>
    )

}

