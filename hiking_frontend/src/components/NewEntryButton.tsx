export const NewEntryButton = () => {
    // VARIABLES //
    const highlightElement = document.getElementById("highlight-element")!
    const newFormElement = document.getElementById("new-form-element")!
    const diaryEntriesElement = document.getElementById("diary-entries-main-elem")!
    const editFormElement = document.getElementById("edit-form-element")!
    
    // FUNCTIONS //
    const changeDisplays = () => {
        highlightElement.style.display = "none"
        newFormElement.style.display = "inline-flex"
        editFormElement.style.display = "none"
    }

    const scrollToHikes = () => {
        diaryEntriesElement.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className = "newButton">
            <button style = {{backgroundColor: "white", width: "30%", alignSelf: "center"}} className = "new-button" id = "new-button-entry-panel" onClick = {() => {
            changeDisplays()
            scrollToHikes()
        }} >New Hike</button>
        </div>
        
    )
}