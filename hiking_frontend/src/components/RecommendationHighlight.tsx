import {MapAPIDisplay} from "./MapAPIDisplay"
import {WeatherDisplay} from "./WeatherDisplay"
import {NewEntryButton} from "./NewEntryButton"

export const RecommendationHighlight = () => {
    return (
        <div className = "recommendation-highlight">
            <div className = "title-and-button">
                <h4>Recommendation Highlight</h4>
                <NewEntryButton />
            </div>
            <MapAPIDisplay />
            <WeatherDisplay />
        </div>
    )
}