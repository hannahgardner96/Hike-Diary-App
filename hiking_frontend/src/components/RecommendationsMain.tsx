import { FunctionComponent, useEffect, useState } from "react"
import {RecommendationHighlight} from "./RecommendationHighlight"
import {RecommendationScroll} from "./RecommendationScroll"
import { HikeLocation } from "./types"
import {LocationSearch} from "./LocationSearch"
import { ScrollBottom } from "./ScrollBottom"

interface RecommendationsMainProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
    displayedLocation: HikeLocation;
    setDisplayedLocation: (f: HikeLocation) => void;
    setNewHikeName: (f: string) => void;
    setNewHikeAddress: (f: string) => void;
}

// const barcelona: HikeLocation = {
//     hike_name: "Barcelona",
//     hike_address: "Barcelona, Spain",
//     hike_lat: 41.3851,
//     hike_lng: 2.1734,
//     hike_img: undefined,
// }

export const RecommendationsMain: FunctionComponent<RecommendationsMainProps> = ({locations, setLocations, displayedLocation, setDisplayedLocation, setNewHikeName, setNewHikeAddress}) => {
    // STATE //
    const [nearbyLocation, setNearbyLocation] = useState("Barcelona, Spain")

    // HOOKS //
    useEffect(() => {
        locations.length > 0 && setDisplayedLocation(locations[0])
    }, [locations])

    return (
        <div className = "recommendations-main" id = "recommendations-main-elem">
            <h3 className = "rec-main-title" >Where should I hike?</h3>
            {/* <p className = "cute-quote">“And into the forest I go, to lose my mind and find my soul.” — John Muir</p> */}
            <LocationSearch locations = {locations} setLocations = {setLocations} setNearbyLocation = {setNearbyLocation} />
            <div className = "recommendations-panels">
                <RecommendationHighlight displayedLocation = {displayedLocation} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
                <RecommendationScroll locations = {locations} setDisplayedLocation = {setDisplayedLocation} nearbyLocation = {nearbyLocation} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
            </div>
            <ScrollBottom />
        </div>
    )
}