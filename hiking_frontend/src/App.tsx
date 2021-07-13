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
  // STATE //
  const [locations, setLocations] = useState<HikeLocation[]>([])
  const [displayedLocation, setDisplayedLocation] = useState(barcelona)
  const [newHikeName, setNewHikeName] = useState("")
  const [newHikeAddress, setNewHikeAddress] = useState("")

  return (
    <>
      <RecommendationsMain  displayedLocation = {displayedLocation} setDisplayedLocation = {setDisplayedLocation} locations = {locations} setLocations = {setLocations} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
      <DiaryEntriesMain displayedLocation = {displayedLocation} setDisplayedLocation = {setDisplayedLocation} locations = {locations} setLocations = {setLocations} newHikeName = {newHikeName} newHikeAddress = {newHikeAddress} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
    </>
  )
}
