import { MapAPIDisplay } from "./MapAPIDisplay"
import { WeatherDisplay } from "./WeatherDisplay"
import { ScrollToButton } from "./ScrollToButton"
import {UserEnteredData} from "./UserEnteredData"
import {NewForm} from "./NewForm"
import {EditForm} from "./EditForm"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"

interface MyHikeHighlightProps {
    locations: HikeLocation[];
    displayedLocation: HikeLocation;
}


export const MyHikeHighlight: FunctionComponent<MyHikeHighlightProps> = ({locations, displayedLocation}) => {
    return (
        <div className = "entry-highlight">
            <h4>My Hike Highlight</h4>
            <UserEnteredData />
            {/* <MapAPIDisplay location = {displayedLocation} /> */}
            <WeatherDisplay lat = {displayedLocation.hike_lat} lng = {displayedLocation.hike_lng} />
            <ScrollToButton />
            <EditForm />
            <NewForm />
        </div>
    )
}