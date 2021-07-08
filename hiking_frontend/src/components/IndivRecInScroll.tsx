import { FunctionComponent } from "react"
import { NewEntryButton } from "./NewEntryButton"
import { HikeLocation } from "./types"

interface IndivRecInScrollProps {
    location: HikeLocation;
}

export const IndivRecInScroll: FunctionComponent<IndivRecInScrollProps> = ({location}) => {
    return (
        <div className = "rec-and-new">
            <h6 className = "indiv-rec-title">{location.hike_name}</h6>
            <NewEntryButton />
        </div>
    )
}