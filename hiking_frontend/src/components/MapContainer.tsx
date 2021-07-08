import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useState } from 'react'

const KEY = process.env.GOOGLE_MAPS_API_KEY!

export const MapContainer = ({lat, lng}) => {
    // MAP VARS //
    const mapStyle = {
        height: "25vh",
        width: "25vh"
    }
    const [center, setCenter] = useState({lat: Number(lat), lng: Number(lng)})

    return (
        <LoadScript googleMapsApiKey = {KEY}>
            <GoogleMap
                mapContainerStyle = {mapStyle}
                zoom = {13}
                center = {center}
                />
        </LoadScript>
    )
}
