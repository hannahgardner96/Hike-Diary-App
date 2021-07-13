import { FunctionComponent } from "react"
import {IndivRecInScroll} from "./IndivRecInScroll"
// import {ScrollToButton} from "./ScrollToButton"
import { HikeLocation } from "./types"

interface RecommendationsScrollProps {
    locations: HikeLocation[];
    setDisplayedLocation: (f: HikeLocation) => void;
    nearbyLocation: string;
    setNewHikeName: (f: string) => void;
    setNewHikeAddress: (f: string) => void;
}

export const RecommendationScroll: FunctionComponent<RecommendationsScrollProps> = ({locations, setDisplayedLocation, nearbyLocation, setNewHikeName, setNewHikeAddress}) => {
    return (
        <div className = "recommendations-scroll">
            <h5 className = "scroll-title">Hikes near {nearbyLocation}</h5>
            <div className = "titles-in-scroll">
                {
                    locations.length > 0 ? locations.map((location, index) => {
                        return <IndivRecInScroll location = {location} key = {index} setDisplayedLocation = {setDisplayedLocation} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
                    })
                    : <h6>Search a Location to See Recommendations.</h6>
                }
            </div>
{/*             
            <ScrollToButton /> */}
        </div>
    )
}