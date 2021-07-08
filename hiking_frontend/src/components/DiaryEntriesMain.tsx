import {MyHikeHighlight} from "./MyHikeHighlight"
import {MyHikesScroll} from "./MyHikesScroll"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"

interface DiaryEntriesMainProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
}

export const DiaryEntriesMain: FunctionComponent<DiaryEntriesMainProps> = ({locations, setLocations}) => {
    return (
        <div className = "entries-main">
            <h1>My Hikes</h1>
            <div className = "entries-panels">
                <MyHikeHighlight locations = {locations}/>
                <MyHikesScroll />
            </div>
            
        </div>
    )
}