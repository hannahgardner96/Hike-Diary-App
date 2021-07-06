import {MyHikeHighlight} from "./MyHikeHighlight"
import {MyHikesScroll} from "./MyHikesScroll"

export const DiaryEntriesMain = () => {
    return (
        <>
            <h1>My Hikes</h1>
            <MyHikeHighlight />
            <MyHikesScroll />
        </>
    )
}