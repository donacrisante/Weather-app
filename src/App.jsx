import './App.css'
import HeaderList from "./components/HeaderList/HeaderList";
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState, useEffect } from "react"; 
import { uid } from "uid";
import  useLocalStorageState from "use-local-storage-state";

const newActivities = [
  { name: "Go for a walk", isForGoodWeather: true, id: "gfhd" },
  { name: "Cycling", isForGoodWeather: true, id: "jhgz" },
  { name: "Cleanup kitchen", isForGoodWeather: false, id: "drfs" },
  { name: "Jogging", isForGoodWeather: true, id: "tzur" },
  { name: "Watch tv", isForGoodWeather: false, id: "aswe" },
];

/* const isGoodWeather = true; */

function App() {
  const [activities, setActivities] = useState(newActivities);
  const [weather, setWeather] = useState(true);
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();

  const url = "https://example-apis.vercel.app/api/weather";

  async function getWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setCondition(data.condition);
      setTemperature(data.temperature);
    } catch (error) {
    }
  }
  getWeather();

  const badWeather = activities.filter((activity) =>
    activity.isForGoodWeather === true ? false : true 
  )
  console.log(badWeather);

  function handleAddActivity({newActivity}) {
    setActivities([...activities, {...newActivity, id: uid(4)}]);
    console.log(activities);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id === id ? false : true))
    console.log("Wasser");
  }

  useEffect(() => {
    const initialWeather = setInterval(getWeather, 5000);
    return () => {
      clearInterval(initialWeather);
    };
  }, []);

  return (
    <>
    <Display emoji={condition} temperature={temperature}/>
    <HeaderList isGoodWeather={weather}/>
    <Form onAddActivity={handleAddActivity}/>
    {weather === false ? badWeather.map((activity) => (<List name={activity.name} key={activity.id} onDeleteActivity={handleDeleteActivity} id={activity.id}/>)) : activities.map((activity) => (<List name={activity.name} key={activity.id} onDeleteActivity={handleDeleteActivity} id={activity.id}/>))}
    </>
  )

}

export default App
