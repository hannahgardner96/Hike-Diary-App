import {MapAPIDisplay} from "./MapAPIDisplay"
import {WeatherDisplay} from "./WeatherDisplay"
import {NewEntryButton} from "./NewEntryButton"
import { HikeLocation } from "./types"
import { FunctionComponent, useEffect, useState } from "react"

interface RecommendationHighlightProps {
    locations: HikeLocation[];
}

export const RecommendationHighlight: FunctionComponent<RecommendationHighlightProps> = ({locations}) => {
    // STATE //
    const [displayedLocation, setDisplayedLocation] = useState(locations[0])

    // HOOKS //
    useEffect(() => {
        setDisplayedLocation(locations[locations.length-1])
    }, [locations])

    return (
        <div className = "recommendation-highlight">
            <div className = "title-and-button">
                {
                    displayedLocation ? <h4>{displayedLocation.hike_name}</h4>
                    : <h4>Search for a hike to see a highlight.</h4>
                }
                
                <NewEntryButton />
            </div>
            <MapAPIDisplay location = {displayedLocation}/>
            {/* <WeatherDisplay /> */}
        </div>
    )
}