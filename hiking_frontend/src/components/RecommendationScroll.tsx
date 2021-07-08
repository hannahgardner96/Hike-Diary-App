import { FunctionComponent } from "react"
import {IndivRecInScroll} from "./IndivRecInScroll"
import {ScrollToButton} from "./ScrollToButton"
import { HikeLocation } from "./types"

interface RecommendationsScrollProps {
    locations: HikeLocation[];
}

export const RecommendationScroll: FunctionComponent<RecommendationsScrollProps> = ({locations}) => {
    return (
        <div className = "recommendations-scroll">
            <h4>Recommendation Scroll</h4>
            {
                locations.map((location, index) => {
                    return <IndivRecInScroll location = {location} key = {index} />
                })
            }
            <ScrollToButton />
        </div>
    )
}