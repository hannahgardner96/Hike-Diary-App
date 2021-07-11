import { MapAPIDisplay } from "./MapAPIDisplay"
import { WeatherDisplay } from "./WeatherDisplay"
// import { ScrollToButton } from "./ScrollToButton"
import {UserEnteredData} from "./UserEnteredData"
import {NewForm} from "./NewForm"
import {EditForm} from "./EditForm"
import { HikeLocation } from "./types"
import { FunctionComponent, useState } from "react"

interface MyHikeHighlightProps {
    locations: HikeLocation[];
    displayedLocation: HikeLocation;
}


export const MyHikeHighlight: FunctionComponent<MyHikeHighlightProps> = ({locations, displayedLocation}) => {

    // STATE //
    // const [highlightDisplay, setHighlightDisplay] = useState("inline-flex")
    // const [newDisplay, setNewDisplay] = useState("none")
    // const [editDisplay, setEditDisplay] = useState("none")

    return (
        <div className = "entry-highlight">
            <div className = "display-highlight" id = "highlight-element">
                <h4>My Hike Highlight</h4>
                <UserEnteredData />
                {/* <MapAPIDisplay location = {displayedLocation} /> */}
                <WeatherDisplay lat = {displayedLocation.hike_lat} lng = {displayedLocation.hike_lng} />
            </div>
            <div className = "display-new" id = "new-form-element">
                <NewForm />
            </div>
            <div className = "display-edit" id = "edit-form-element">
                <EditForm />
            </div>
            {/* <ScrollToButton /> */}
        </div>
    )
}