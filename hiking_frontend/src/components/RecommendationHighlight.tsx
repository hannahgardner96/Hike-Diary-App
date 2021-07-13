import {MapAPIDisplay} from "./MapAPIDisplay"
import {WeatherDisplay} from "./WeatherDisplay"
import { HikeLocation } from "./types"
import { FunctionComponent, useEffect, useState } from "react"
import { NewEntryFromRecButton } from "./newEntryFromRecButton"

interface RecommendationHighlightProps {
    displayedLocation: HikeLocation;
    setNewHikeName: (f: string) => void;
    setNewHikeAddress: (f: string) => void;
}

export const RecommendationHighlight: FunctionComponent<RecommendationHighlightProps> = ({displayedLocation, setNewHikeName, setNewHikeAddress}) => {

    return (
        <div className = "recommendation-highlight">
            <div className = "title-and-button">
                {
                    displayedLocation ? <h5 className = "highlight-title">{displayedLocation.hike_name}</h5>
                    : <h5 className = "highlight-title">Search a Location to See a Recommendation.</h5>
                }
                
                <NewEntryFromRecButton hikeName = {displayedLocation.hike_name} hikeAddress = {displayedLocation.hike_address} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress}  />
            </div>
            <div className = "map-and-weather">
                <MapAPIDisplay location = {displayedLocation}/>
                <WeatherDisplay lat = {displayedLocation.hike_lat} lng = {displayedLocation.hike_lng} />
            </div>
            
        </div>
    )
}