import { FunctionComponent } from "react"
import { NewEntryButton } from "./NewEntryButton"
import { HikeLocation } from "./types"

interface IndivRecInScrollProps {
    location: HikeLocation;
    setDisplayedLocation: (f: HikeLocation) => void;
}

export const IndivRecInScroll: FunctionComponent<IndivRecInScrollProps> = ({location, setDisplayedLocation}) => {
    return (
        <div className = "rec-and-new" onClick = {() => setDisplayedLocation(location)}>
            <h6 className = "indiv-rec-title">{location.hike_name}</h6>
            <NewEntryButton />
        </div>
    )
}