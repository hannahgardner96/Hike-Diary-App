import {MyHikeHighlight} from "./MyHikeHighlight"
import {MyHikesScroll} from "./MyHikesScroll"
import { HikeLocation } from "./types"
import { FunctionComponent, useEffect, useState } from "react"
import { NewEntryButton } from "./NewEntryButton"
import { ScrollTop } from "./ScrollTop"

// let baseURL = "http://localhost:8000/api"

let baseURL

if (process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/api"
} else {
    // "https://hike-diary-backend.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://hike-diary-backend.herokuapp.com/api'
}

interface DiaryEntriesMainProps {
    newHikeName: string;
    newHikeAddress: string;
    setNewHikeName: (f: string) => void;
    setNewHikeAddress: (f: string) => void;
}


const barcelona = {
    hike_name: "Barcelona",
    hike_address: "Barcelona, Spain",
    hike_date: "2021-06-06",
    hike_description: "hike description"
  }  

export const DiaryEntriesMain: FunctionComponent<DiaryEntriesMainProps> = ({newHikeName, newHikeAddress, setNewHikeName, setNewHikeAddress}) => {
    // STATE //
    const [diaryEntries, setDiaryEntries] = useState([])
    const [displayedHike, setDisplayedHike] = useState(barcelona)

    // HOOKS //
    useEffect(() => {
        getEntries()
    }, [])

    // API REQ //
    const getEntries = () => {
        fetch(`${baseURL}/diary_entry/`)
            .then(data => {return data.json()}, error => console.log(error))
            .then((diaryEntries) => {
                setDiaryEntries(diaryEntries)
                if (diaryEntries.length > 0) 
                    setDisplayedHike(diaryEntries[0])
            })
    }

    return (
        <div className = "entries-main" id = "diary-entries-main-elem">
            <h1 className = "my-hikes-title">My Hikes</h1>
            <NewEntryButton  />
            <div className = "entries-panels">
                <MyHikeHighlight displayedLocation = {displayedHike} getEntries = {getEntries} newHikeName = {newHikeName} newHikeAddress = {newHikeAddress} setNewHikeName = {setNewHikeName} setNewHikeAddress = {setNewHikeAddress} />
                <MyHikesScroll diaryEntries = {diaryEntries} setDisplayedHike = {setDisplayedHike} />
            </div>
            <ScrollTop />
        </div>
    )
}