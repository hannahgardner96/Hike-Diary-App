import { NewEntryButton } from "./NewEntryButton"
import {IndivHikeInScroll} from "./IndivHikeInScroll"

export const MyHikesScroll = () => {
    return (
        <div className = "entries-scroll">
            <h4>My Hikes Scroll</h4>
            <IndivHikeInScroll />
            <NewEntryButton />
        </div>
    )
}