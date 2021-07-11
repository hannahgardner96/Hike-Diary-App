import { /*useEffect, */useState } from "react"
import {DiaryEntriesMain} from "./components/DiaryEntriesMain"
import {RecommendationsMain} from "./components/RecommendationsMain"
import { HikeLocation } from "./components/types"

const barcelona: HikeLocation = {
  hike_name: "Barcelona",
  hike_address: "Barcelona, Spain",
  hike_lat: 41.3851,
  hike_lng: 2.1734,
  hike_img: undefined,
}

export const App = () => {
  // VARIABLES //
  // const highlightElement = document.getElementById("highlight-element")
  // const newFormElement = document.getElementById("new-form-element")
  // const editFormElement = document.getElementById("edit-form-element")

  // STATE //
  const [locations, setLocations] = useState<HikeLocation[]>([])
  const [displayedLocation, setDisplayedLocation] = useState(barcelona)

  return (
    <>
      <RecommendationsMain  displayedLocation = {displayedLocation} setDisplayedLocation = {setDisplayedLocation} locations = {locations} setLocations = {setLocations}/>
      <DiaryEntriesMain displayedLocation = {displayedLocation} setDisplayedLocation = {setDisplayedLocation} locations = {locations} setLocations = {setLocations} />
    </>
  )
}
