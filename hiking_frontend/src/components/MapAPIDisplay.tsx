import {MapSquare} from "./MapSquare"
import {ImageSquare} from "./ImageSquare"

export const MapAPIDisplay = () => {
    return (
        <div className = "map-display">
            <MapSquare />
            <ImageSquare />
        </div>
    )
}