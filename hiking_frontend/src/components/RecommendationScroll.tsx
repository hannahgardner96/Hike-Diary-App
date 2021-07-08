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
                locations.length > 0 ? locations.map((location, index) => {
                    return <IndivRecInScroll location = {location} key = {index} />
                })
                : <h6>Search a Location to See Recommendations.</h6>
            }
            <ScrollToButton />
        </div>
    )
}