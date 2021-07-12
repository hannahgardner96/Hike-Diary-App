export const IndivHikeInScroll = ({hike, setDisplayedHike}) => {
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
        <div className = "hikes-in-scroll" onClick = {() => {
            setDisplayedHike(hike)
            changeDisplays()
        }}>
            <h6>{hike.hike_name} {hike.hike_date}</h6>
        </div>
    )
}