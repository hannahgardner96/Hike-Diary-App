import {MapContainer} from "./MapContainer"
import {ImageSquare} from "./ImageSquare"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"

interface MapAPIDisplayProps {
    location: HikeLocation;
}

const defaultImg: string = "Aap_uED82p20B2ZL9cqM5nWuZlxYMLKjV9v2YWDP6Aqn3HXiP8hyRMYR8LDjl-YEviFIIohAQCWnialAqn7NpEYOARGW0TCzHokKMy4evUGRUGqFc3n-Fwfni2yK0Ri9gDBZmDmurMNYdCetBpX9dqwA_ZUHyLqwQ_KplEFQEXL-arQZaqSS"

export const MapAPIDisplay: FunctionComponent<MapAPIDisplayProps> = ({location}) => {
    return (
        <div className = "map-display">
            {
                location ? <> <MapContainer lat = {location.hike_lat} lng = {location.hike_lng}/>
                <ImageSquare img = {location.hike_img} /> </>
                : <><MapContainer lat = {41.3851} lng = {2.1734}/> 
                <ImageSquare img = {defaultImg} />
                </>
            }
            
        </div>
    )
}