import { MapAPIDisplay } from "./MapAPIDisplay"
import { WeatherDisplay } from "./WeatherDisplay"
import { ScrollToButton } from "./ScrollToButton"
import {UserEnteredData} from "./UserEnteredData"
import {NewForm} from "./NewForm"
import {EditForm} from "./EditForm"


export const MyHikeHighlight = () => {
    return (
        <div className = "entry-highlight">
            <h4>My Hike Highlight</h4>
            <UserEnteredData />
            <MapAPIDisplay />
            <WeatherDisplay />
            <ScrollToButton />
            <EditForm />
            <NewForm />
        </div>
    )
}