export const ViewHighlightButton = () => {
    // VARIABLES //
    const highlightElement = document.getElementById("highlight-element")!
    const newFormElement = document.getElementById("new-form-element")!
    const editFormElement = document.getElementById("edit-form-element")!
    
    // FUNCTIONS //
    const changeDisplays = () => {
        highlightElement.style.display = "inline-flex"
        newFormElement.style.display = "none"
        editFormElement.style.display = "none"
    }

    return (
        <button style = {{backgroundColor: "white"}} className = "highlight-button" onClick = {() => changeDisplays()} >Return to Highlight</button>
    )
}