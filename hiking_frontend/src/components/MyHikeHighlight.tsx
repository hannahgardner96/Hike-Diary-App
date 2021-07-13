import { MapAPIDisplay } from "./MapAPIDisplay"
import { WeatherDisplay } from "./WeatherDisplay"
// import { ScrollToButton } from "./ScrollToButton"
import {UserEnteredData} from "./UserEnteredData"
import {NewForm} from "./NewForm"
import {EditForm} from "./EditForm"
import { HikeLocation } from "./types"
import { FunctionComponent, useState } from "react"
import { useEffect } from "react"

interface MyHikeHighlightProps {
    displayedLocation: Record<string, any>;
    getEntries: (f) => void;
    newHikeName: string;
    newHikeAddress: string;
    setNewHikeName: (f: string) => void;
    setNewHikeAddress: (f: string) => void;
}
interface PositionObject {
    lat: number,
    lng: number
}

// let baseURL = "http://localhost:8000/api"

let baseURL

if (process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/api"
} else {
    // "https://hike-diary-backend.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://hike-diary-backend.herokuapp.com/api'
}

export const MyHikeHighlight: FunctionComponent<MyHikeHighlightProps> = ({displayedLocation, getEntries, newHikeName, newHikeAddress, setNewHikeName, setNewHikeAddress}) => {

    // STATE //
    const [latLng, setLatLng] = useState<PositionObject | null>(null)

    // VARIABLES //
    const highlightElement = document.getElementById("highlight-element")!
    const editFormElement = document.getElementById("edit-form-element")!

    // HOOKS //
    useEffect(() => {
        getLatLng()
    }, [displayedLocation])

    // API REQ //
    const getLatLng = () => {
        const url = `${baseURL}/location_search?location_string=${encodeURIComponent(displayedLocation.hike_address)}`
        fetch(url)
        .then(data => {return data.json()}, error => console.log(error))
        .then(parsedData => {
            const newPosition: PositionObject = {
                lat: Number(parsedData["candidates"][0]["geometry"]["location"]["lat"]),
                lng: Number(parsedData["candidates"][0]["geometry"]["location"]["lng"])
            }
            setLatLng(newPosition)
        }, error => console.log(error))
    }

    // FUNCTIONS //
    const changeDisplays = () => {
        highlightElement.style.display = "none"
        editFormElement.style.display = "inline-flex"
    }

    return (
        <div className = "entry-highlight">
            {
                    latLng ? <div className = "display-highlight" id = "highlight-element">
                        <div className = "title-and-edit">
                            <h4 className = "hike-highlight-title">{displayedLocation.hike_name}</h4>
                            <div className = "edit-button">
                               <button style = {{backgroundColor: "white", width: "30%", padding: "1%"}} onClick = {() => {
                            changeDisplays()
                            console.log(displayedLocation)
                            }}>Edit</button> 
                            </div>
                            
                        </div>
                        <div className = "data-and-weather">
                            <UserEnteredData hike = {displayedLocation} />
                        {/* <MapAPIDisplay location = {displayedLocation} /> */}
                            <WeatherDisplay lat = {latLng.lat} lng = {latLng.lng} />
                        </div>
                        
                </div>
                : <div className = "display-highlight" id = "highlight-element">Add a hike to view a highlight.</div>
            }
            
            <div className = "display-new" id = "new-form-element">
                <NewForm getEntries = {getEntries} newHikeName = {newHikeName} newHikeAddress = {newHikeAddress} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
            </div>
            <div className = "display-edit" id = "edit-form-element">
                <EditForm hike = {displayedLocation} />
            </div>
            {/* <ScrollToButton /> */}
        </div>
    )
}