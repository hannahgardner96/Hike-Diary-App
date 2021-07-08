import { FunctionComponent } from "react"
import {RecommendationHighlight} from "./RecommendationHighlight"
import {RecommendationScroll} from "./RecommendationScroll"
import { HikeLocation } from "./types"

interface RecommendationsMainProps {
    locations: HikeLocation[];
}

export const RecommendationsMain: FunctionComponent<RecommendationsMainProps> = ({locations}) => {
    return (
        <div className = "recommendations-main">
            <h1>My Recommendations</h1>
            <div className = "recommendations-panels">
                <RecommendationHighlight />
                <RecommendationScroll locations = {locations} />
            </div>
        </div>
    )
}