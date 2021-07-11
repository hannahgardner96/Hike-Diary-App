import {MapAPIDisplay} from "./MapAPIDisplay"
import {WeatherDisplay} from "./WeatherDisplay"
import {NewEntryButton} from "./NewEntryButton"
import { HikeLocation } from "./types"
import { FunctionComponent, useEffect, useState } from "react"

interface RecommendationHighlightProps {
    locations: HikeLocation[];
    displayedLocation: HikeLocation;
}

export const RecommendationHighlight: FunctionComponent<RecommendationHighlightProps> = ({locations, displayedLocation}) => {

    return (
        <div className = "recommendation-highlight">
            <div className = "title-and-button">
                {
                    displayedLocation ? <h5 className = "highlight-title">{displayedLocation.hike_name}</h5>
                    : <h5 className = "highlight-title">Search a Location to See a Recommendation.</h5>
                }
                
                <NewEntryButton />
            </div>
            <MapAPIDisplay location = {displayedLocation}/>
            <WeatherDisplay lat = {displayedLocation.hike_lat} lng = {displayedLocation.hike_lng} />
        </div>
    )
}