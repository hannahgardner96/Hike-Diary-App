import { MapAPIDisplay } from "./MapAPIDisplay"
import { WeatherDisplay } from "./WeatherDisplay"
import { ScrollToButton } from "./ScrollToButton"
import {UserEnteredData} from "./UserEnteredData"
import {NewForm} from "./NewForm"
import {EditForm} from "./EditForm"


export const MyHikeHighlight = () => {
    return (
        <>
            <h1>My Hike Highlight</h1>
            <UserEnteredData />
            <MapAPIDisplay />
            <WeatherDisplay />
            <ScrollToButton />
            <EditForm />
            <NewForm />
        </>
    )
}