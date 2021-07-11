import {MyHikeHighlight} from "./MyHikeHighlight"
import {MyHikesScroll} from "./MyHikesScroll"
import { HikeLocation } from "./types"
import { FunctionComponent } from "react"
import { NewEntryButton } from "./NewEntryButton"
import { ScrollTop } from "./ScrollTop"

interface DiaryEntriesMainProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
    displayedLocation: HikeLocation;
    setDisplayedLocation: (f: HikeLocation) => void;
}

export const DiaryEntriesMain: FunctionComponent<DiaryEntriesMainProps> = ({locations, setLocations, displayedLocation, setDisplayedLocation}) => {
    return (
        <div className = "entries-main" id = "diary-entries-main-elem">
            <h1 className = "my-hikes-title">My Hikes</h1>
            <NewEntryButton  />
            <div className = "entries-panels">
                <MyHikeHighlight displayedLocation = {displayedLocation} locations = {locations}/>
                <MyHikesScroll />
            </div>
            <ScrollTop />
        </div>
    )
}