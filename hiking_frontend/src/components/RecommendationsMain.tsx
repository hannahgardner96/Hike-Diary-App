import { FunctionComponent } from "react"
import {RecommendationHighlight} from "./RecommendationHighlight"
import {RecommendationScroll} from "./RecommendationScroll"
import { HikeLocation } from "./types"
import {LocationSearch} from "./LocationSearch"

interface RecommendationsMainProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
}

export const RecommendationsMain: FunctionComponent<RecommendationsMainProps> = ({locations, setLocations}) => {
    return (
        <div className = "recommendations-main">
            <h1>My Recommendations</h1>
            <LocationSearch locations = {locations} setLocations = {setLocations} />
            <div className = "recommendations-panels">
                <RecommendationHighlight locations = {locations} />
                <RecommendationScroll locations = {locations} />
            </div>
        </div>
    )
}