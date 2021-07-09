import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useState } from 'react'

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY!

export const MapContainer = ({lat, lng}) => {
    // MAP VARS //
    const mapStyle = {
        height: "18vh",
        width: "18vh"
    }
    const [center, setCenter] = useState({lat: Number(lat), lng: Number(lng)})

    return (
        <div className = "map-container">
            <LoadScript googleMapsApiKey = {KEY}>
                <GoogleMap
                    mapContainerStyle = {mapStyle}
                    zoom = {13}
                    center = {center}
                    />
            </LoadScript>
        </div>
    )
}
