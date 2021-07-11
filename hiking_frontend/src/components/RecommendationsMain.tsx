import { FunctionComponent, useEffect, useState } from "react"
import {RecommendationHighlight} from "./RecommendationHighlight"
import {RecommendationScroll} from "./RecommendationScroll"
import { HikeLocation } from "./types"
import {LocationSearch} from "./LocationSearch"
// import { ScrollToButton } from "./ScrollToButton"

interface RecommendationsMainProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
    displayedLocation: HikeLocation;
    setDisplayedLocation: (f: HikeLocation) => void;
}

// const barcelona: HikeLocation = {
//     hike_name: "Barcelona",
//     hike_address: "Barcelona, Spain",
//     hike_lat: 41.3851,
//     hike_lng: 2.1734,
//     hike_img: undefined,
// }

export const RecommendationsMain: FunctionComponent<RecommendationsMainProps> = ({locations, setLocations, displayedLocation, setDisplayedLocation}) => {
    // STATE //
    // const [displayedLocation, setDisplayedLocation] = useState(barcelona)

    // HOOKS //
    useEffect(() => {
        locations.length > 0 && setDisplayedLocation(locations[0])
    }, [locations])

    return (
        <div className = "recommendations-main">
            <h3 className = "rec-main-title" >Where should I hike?</h3>
            {/* <p className = "cute-quote">“And into the forest I go, to lose my mind and find my soul.” — John Muir</p> */}
            <LocationSearch locations = {locations} setLocations = {setLocations} />
            <div className = "recommendations-panels">
                <RecommendationHighlight locations = {locations} displayedLocation = {displayedLocation} />
                <RecommendationScroll locations = {locations} setDisplayedLocation = {setDisplayedLocation} />
            </div>
            {/* <ScrollToButton /> */}
        </div>
    )
}