import { useState } from "react"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"
import { useEffect } from "react"

let baseURL = "http://localhost:8000/api"

// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://localhost:3003';
// } else {
//     // "https://morning-river-69185.herokuapp.com/" in this case is the *API* url
//     baseURL = 'https://morning-river-69185.herokuapp.com';
// }

interface LocationSearchProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
    setNearbyLocation: (f: string) => void;
}

interface PositionObject {
    lat: number,
    lng: number
}

export const LocationSearch: FunctionComponent<LocationSearchProps> = ({locations, setLocations, setNearbyLocation}) => {
    // STATE //
    const [locationString, setLocationString] = useState("") // string entered by user, used to make places api textquery req to get lat/lng of location of interest
    const [position, setPosition] = useState<PositionObject>({lat: 41.3851, lng: 2.1734}) // object of lat/lng obtained from textquery to make a places api nearbysearch req to obtain multiple locations

    // HOOKS //
    useEffect(() => {
        getNearbyLocations()
            .then(buildLocationObjects)
    }, [position])

    // API REQ //
    const getPosition = () => {
        setNearbyLocation(locationString)
        const url = `${baseURL}/location_search?location_string=${encodeURIComponent(locationString)}`
        fetch(url)
            .then(data => {return data.json()}, error => console.log(error))
            .then(parsedData => {
                const newPosition: PositionObject = {
                    lat: Number(parsedData["candidates"][0]["geometry"]["location"]["lat"]),
                    lng: Number(parsedData["candidates"][0]["geometry"]["location"]["lng"])
                }
                setPosition(newPosition)
                setLocationString("")
            }, error => console.log(error))
    }

    const getNearbyLocations = () => {
        const url = `${baseURL}/get_nearby_locations?lat=${encodeURIComponent(position.lat)}&lng=${encodeURIComponent(position.lng)}`
        return fetch(url)
            .then(data => {return data.json()}, error => console.log(error))
            .then(parsedData => {
            const matchingLocations = parsedData.results
            return matchingLocations
        }, error => console.log(error))   
    }

    const buildLocationObjects = (locationsArray) => {
        let locationObjects = locationsArray.map(location => {
            if (location.photos) {
                return {
                hike_name: location.name,
                hike_address: location.place_id,
                hike_lat: location.geometry.location.lat,
                hike_lng: location.geometry.location.lng,
                hike_img: location.photos[0].photo_reference,
                }
            } else {
                return {
                    hike_name: location.name,
                    hike_address: location.place_id,
                    hike_lat: location.geometry.location.lat,
                    hike_lng: location.geometry.location.lng,
                    hike_img: null,
                    }
            }
            
        })
        setLocations(locationObjects)
    }

    const getRecommendations = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getPosition()

    }

    return (
        <form className = "location-search" onSubmit = {getRecommendations}>
            <input type = "text" id = "location_string" name = "location_string" onChange = {e => setLocationString(e.target.value)} placeholder = "Where are you?" value = {locationString} />
            <input style = {{backgroundColor: "white"}} className = "search-btn" type = "submit" value = "Search"/>
        </form>
    )
}
