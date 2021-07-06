import {RecommendationHighlight} from "./RecommendationHighlight"
import {RecommendationScroll} from "./RecommendationScroll"

export const RecommendationsMain = () => {
    return (
        <>
            <h1>My Recommendations</h1>
            <RecommendationHighlight />
            <RecommendationScroll />
        </>
    )
}