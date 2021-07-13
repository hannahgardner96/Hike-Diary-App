import { useEffect } from "react"
import { useState } from "react"
import { ViewHighlightButton } from "./ViewHighlightButton"

// let baseURL = "http://localhost:8000/api"

let baseURL

if (process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/api"
} else {
    // "https://hike-diary-backend.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://hike-diary-backend.herokuapp.com/'
}
export const EditForm = ({hike}) => {
    // STATE //
    const [hikeName, setHikeName] = useState(hike.hike_name)
    const [hikeAddress, setHikeAddress] = useState(hike.hike_address)
    const [hikeDate, setHikeDate] = useState(hike.hike_date)
    const [hikeDescription, setHikeDescription] = useState(hike.hike_description)
    
    // HOOKS //
    useEffect(() => {
        setHikeName(hike.hike_name)
        setHikeAddress(hike.hike_address)
        setHikeDate(hike.hike_date)
        setHikeDescription(hike.hike_description)
    }, [hike])

    // API REQ //
    // const updateHike = (e) => {
    //     e.preventDefault()
    //     fetch(`${baseURL}/diary_entry/`, {
            
    //     })
    // }

    return (
        <div>
            <h4>Edit {hike.hike_name} Hike</h4>
            <form className = "edit-entry-form">
                <input className = "edit-form-input" type = "text" name = "hike_name" id = "hike_name" placeholder = "Hike Name" value = {hikeName} onChange = {e => setHikeName(e.target.value)} />
                <input className = "edit-form-input" type = "text" name = "hike_address" id = "hike_address" placeholder = "Address" value = {hikeAddress} onChange = {e => setHikeAddress(e.target.value)} /> 
                 <input className = "edit-form-input" name = "hike_date" id = "hike_date" type = "date" value = {hikeDate} onChange = {e => setHikeDate(e.target.value)} />
                <input className = "edit-form-input" type = "text" name = "hike_description" id = "hike_description" placeholder = "Description" value = {hikeDescription} onChange = {e => setHikeDescription(e.target.value)} /> 
                <input className = "edit-form-input" type = "submit" value = "Update Hike" style = {{background: "white", color: "black"}} /> 
            </form>
            <ViewHighlightButton />
        </div>
    )
}