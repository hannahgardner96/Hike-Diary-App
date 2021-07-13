import {MyHikeHighlight} from "./MyHikeHighlight"
import {MyHikesScroll} from "./MyHikesScroll"
import { HikeLocation } from "./types"
import { FunctionComponent, useEffect, useState } from "react"
import { NewEntryButton } from "./NewEntryButton"
import { ScrollTop } from "./ScrollTop"
import { isThisTypeNode } from "typescript"

// let baseURL = "http://localhost:8000/api"

let baseURL

if (process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/api"
} else {
    // "https://hike-diary-backend.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://hike-diary-backend.herokuapp.com/'
}

interface DiaryEntriesMainProps {
    locations: HikeLocation[];
    setLocations: (f: HikeLocation[]) => void;
    displayedLocation: HikeLocation;
    setDisplayedLocation: (f: HikeLocation) => void;
}

export const DiaryEntriesMain: FunctionComponent<DiaryEntriesMainProps> = ({locations, setLocations, displayedLocation, setDisplayedLocation}) => {
    // STATE //
    const [diaryEntries, setDiaryEntries] = useState([])
    const [displayedHike, setDisplayedHike] = useState({})

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
                setDisplayedHike(diaryEntries[0])
            })
    }

    return (
        <div className = "entries-main" id = "diary-entries-main-elem">
            <h1 className = "my-hikes-title">My Hikes</h1>
            <NewEntryButton  />
            <div className = "entries-panels">
                <MyHikeHighlight displayedLocation = {displayedHike} getEntries = {getEntries} />
                <MyHikesScroll diaryEntries = {diaryEntries} setDisplayedHike = {setDisplayedHike} />
            </div>
            <ScrollTop />
        </div>
    )
}