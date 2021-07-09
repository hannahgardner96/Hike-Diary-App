import {MapContainer} from "./MapContainer"
import {ImageSquare} from "./ImageSquare"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"

interface MapAPIDisplayProps {
    location: HikeLocation;
}

const defaultImg: string = "Aap_uEBaRri4OHdlHztGYgY38df5LG8l9uPg7Q2cnhVoy5ogcRar6zw0k831ZctpnSHh6stREpHRvJ-Bh0mhUiqKNomcy4rIYY9RcTHx6Yu0dfWiwPTghLPSq-7Wfuy5ssBPA_IAC4FFtoM-jOGEwBLPhwcVWKkLcLF8HlBPt_ue_bTWW3aX" 

export const MapAPIDisplay: FunctionComponent<MapAPIDisplayProps> = ({location}) => {
    return (
        <div className = "map-display">
            {
                location ? (
                <> 
                    <MapContainer lat = {location.hike_lat} lng = {location.hike_lng}/>
                    <ImageSquare img = {location.hike_img} /> 
                </>) : (
                <>
                    <MapContainer lat = {41.3851} lng = {2.1734}/> 
                    <ImageSquare img = {defaultImg} />
                </>)
            }
            
        </div>
    )
}