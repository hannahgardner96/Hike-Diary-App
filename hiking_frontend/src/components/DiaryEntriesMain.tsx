import {MyHikeHighlight} from "./MyHikeHighlight"
import {MyHikesScroll} from "./MyHikesScroll"

export const DiaryEntriesMain = () => {
    return (
        <div className = "entries-main">
            <h1>My Hikes</h1>
            <div className = "entries-panels">
                <MyHikeHighlight />
                <MyHikesScroll />
            </div>
            
        </div>
    )
}