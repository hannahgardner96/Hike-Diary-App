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
}


export const MyHikeHighlight: FunctionComponent<MyHikeHighlightProps> = ({locations}) => {
    return (
        <div className = "entry-highlight">
            <h4>My Hike Highlight</h4>
            <UserEnteredData />
            <MapAPIDisplay location = {locations[0]} />
            <WeatherDisplay />
            <ScrollToButton />
            <EditForm />
            <NewForm />
        </div>
    )
}