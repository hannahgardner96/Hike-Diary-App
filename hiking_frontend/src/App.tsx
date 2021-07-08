import { useEffect, useState } from "react"
import {DiaryEntriesMain} from "./components/DiaryEntriesMain"
import {RecommendationsMain} from "./components/RecommendationsMain"

const baseURL = "http://localhost:8000/api"

export const App = () => {
  // STATE //
  const [locations, setLocations] = useState([])
  
  // HOOKS //
  useEffect(() => {
    fetch(`${baseURL}/hike_location/`)
      .then(data => {return data.json()}, error => console.log(error))
      .then(parsedData => setLocations(parsedData), error => console.log(error))
  }, [])

  // RETURN //
  return (
    <>
      <RecommendationsMain locations = {locations} />
      <DiaryEntriesMain />
    </>
  )
}
