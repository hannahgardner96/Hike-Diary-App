import { ViewHighlightButton } from "./ViewHighlightButton"

export const NewForm = () => {
    return (
        <div className = "new-entry">
            <div className = "edit-title-and-button">
                <h4 className = "new-form-title">New Entry</h4>
                <ViewHighlightButton />                
            </div>
            <form>
                <input type = "text" name = "hike_name" id = "hike_name" placeholder = "Hike Name" />
                <input type = "text" name = "hike_address" id = "hike_address" placeholder = "Address" /> 
                <input name = "hike_name" id = "hike_dat" type = "date" />
                <input type = "text" name = "hike_description" id = "hike_description" placeholder = "Description" /> 
                <label>Weather Rating</label>
                <input type = "number" name = "hike_weather_rating" id = "hike_weather_rating" placeholder = "0-5" value = "0" />
            </form>
        </div>
    )
}