import { FunctionComponent } from "react"
import { NewEntryButton } from "./NewEntryButton"
import { NewEntryFromRecButton } from "./newEntryFromRecButton"
import { HikeLocation } from "./types"

interface IndivRecInScrollProps {
    location: HikeLocation;
    setDisplayedLocation: (f: HikeLocation) => void;
    setNewHikeName: (f: string) => void;
    setNewHikeAddress: (f: string) => void;
}

export const IndivRecInScroll: FunctionComponent<IndivRecInScrollProps> = ({location, setDisplayedLocation, setNewHikeName, setNewHikeAddress}) => {
    return (
        <div className = "rec-and-new" onClick = {() => setDisplayedLocation(location)}>
            <h6 className = "indiv-rec-title">{location.hike_name}</h6>
            <NewEntryFromRecButton hikeName = {location.hike_name} hikeAddress = {location.hike_address} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
        </div>
    )
}