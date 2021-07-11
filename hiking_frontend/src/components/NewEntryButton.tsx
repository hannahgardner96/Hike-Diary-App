export const NewEntryButton = () => {
    // VARIABLES //
    const highlightElement = document.getElementById("highlight-element")!
    const newFormElement = document.getElementById("new-form-element")!
    const diaryEntriesElement = document.getElementById("diary-entries-main-elem")!
    
    // FUNCTIONS //
    const changeDisplays = () => {
        highlightElement.style.display = "none"
        newFormElement.style.display = "inline-flex"
    }

    const scrollToHikes = () => {
        diaryEntriesElement.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <button style = {{backgroundColor: "white"}} className = "new-button" onClick = {() => {
            changeDisplays()
            scrollToHikes()
        }} >New Hike</button>
    )
}