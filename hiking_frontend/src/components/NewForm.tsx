import { useEffect } from "react"
import { useState } from "react"
import { ViewHighlightButton } from "./ViewHighlightButton"

// let baseURL = "http://localhost:8000/api"

let baseURL

if (process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/api"
} else {
    // "https://hike-diary-backend.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://hike-diary-backend.herokuapp.com/api'
}

export const NewForm = ({getEntries, setNewHikeName, setNewHikeAddress, newHikeName, newHikeAddress}) => {
    // VARIABLES //
    
    // STATE //
    const [hikeName, setHikeName] = useState(newHikeName)
    const [hikeAddress, setHikeAddress] = useState(newHikeAddress)
    const [hikeDate, setHikeDate] = useState("")
    const [hikeDescription, setHikeDescription] = useState("")

    // HOOKS //
    useEffect(() => {
        setHikeName(newHikeName)
        setHikeAddress(newHikeAddress)
    }, [newHikeName, newHikeAddress])

    // API REQ //
    const addHike = (e) => {
        e.preventDefault()
        let hikeToAdd = {
            hike_name: hikeName,
            hike_address: hikeAddress,
            hike_date: hikeDate,
            hike_description: hikeDescription
        }
        fetch(`${baseURL}/diary_entry/`, {
            method: "POST",
            body: JSON.stringify(hikeToAdd),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => {
                getEntries()
            })
            .then(() => {
                resetState()
            })
    }

    // FUNCTIONS //
    const resetState = () => {
        setNewHikeAddress("")
        setNewHikeName("")
        setHikeName(hikeName)
        setHikeAddress(hikeAddress)
        setHikeDate("")
        setHikeDescription("")
        
    }
    return (
        <div className = "new-entry">
            <div className = "edit-title-and-button">
                <h4 className = "new-form-title">New Hike</h4>
                <ViewHighlightButton />                
            </div>
            <form className = "new-entry-form" onSubmit = {(e) => addHike(e)}>
                <input className = "new-form-input" type = "text" name = "hike_name" id = "hike_name" placeholder = "Hike Name" value = {hikeName} onChange = {e => setHikeName(e.target.value)} />
                <input className = "new-form-input" type = "text" name = "hike_address" id = "hike_address" placeholder = "Address" value = {hikeAddress} onChange = {e => setHikeAddress(e.target.value)} /> 
                 <input className = "new-form-input" name = "hike_date" id = "hike_date" type = "date" value = {hikeDate} onChange = {e => setHikeDate(e.target.value)} />
                <input className = "new-form-input" type = "text" name = "hike_description" id = "hike_description" placeholder = "Description" value = {hikeDescription} onChange = {e => setHikeDescription(e.target.value)} /> 
                <input className = "new-form-input" type = "submit" value = "Add Hike" style = {{background: "white", color: "black"}} /> 
            </form>
        </div>
    )
}