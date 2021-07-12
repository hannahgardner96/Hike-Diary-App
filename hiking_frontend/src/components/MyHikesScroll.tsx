import {IndivHikeInScroll} from "./IndivHikeInScroll"

export const MyHikesScroll = ({diaryEntries, setDisplayedHike}) => {
    return (
        <div className = "entries-scroll">
            <h4>My Hikes</h4>
            <div>
                {
                diaryEntries.map((entry, index) => {
                    return <IndivHikeInScroll hike = {entry} key = {index} setDisplayedHike = {setDisplayedHike} />
                })
            }
            </div>
        </div>
    )
}