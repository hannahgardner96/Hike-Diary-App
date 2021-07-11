import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useState } from 'react'
import { LocationSearch } from './LocationSearch'

interface SetInfoWindow {
    name: string,
    address: string
}

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY!

export const MapContainer = ({lat, lng, name, address}) => {
    // STATE //
    const [infoWindow, setInfoWindow] = useState<SetInfoWindow | null>(null)

    // MAP VARS //
    const mapStyle = {
        height: "25vh",
        width: "35vh"
    }


    return (
        <div className = "map-container">
            <LoadScript googleMapsApiKey = {KEY}>
                <GoogleMap
                    mapContainerStyle = {mapStyle}
                    zoom = {13}
                    center = {{lat: Number(lat), lng: Number(lng)}}
                >
                    <Marker 
                        position = {{lat: Number(lat), lng: Number(lng)}}
                        onClick = {() => setInfoWindow({name, address})}
                    />
                    {
                        infoWindow &&
                        (
                            <InfoWindow
                                position = {{lat: Number(lat), lng: Number(lng)}}
                                // clickable={true}
                                onCloseClick={() => setInfoWindow(null)}
                            >
                                <p>{infoWindow.name} – {infoWindow.address}</p>
                            </InfoWindow>
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

// used this article to structure maps and maps import https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d