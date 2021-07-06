import {MapAPIDisplay} from "./MapAPIDisplay"
import {WeatherDisplay} from "./WeatherDisplay"
import {NewEntryButton} from "./NewEntryButton"

export const RecommendationHighlight = () => {
    return (
        <>
            <h1>Recommendation Highlight</h1>
            <NewEntryButton />
            <MapAPIDisplay />
            <WeatherDisplay />
        </>
    )
}