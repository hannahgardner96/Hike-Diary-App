export const ScrollTop = () => {
    // VARIABLES //
    const recommendationsElement = document.getElementById("recommendations-main-elem")!

    // FUNCTIONS //
    const scrollToRecs = () => {
        recommendationsElement.scrollIntoView({
            behavior: 'smooth'
    })
}

return (
    <button style = {{backgroundColor: "white", width: "30%", margin: "auto"}} onClick = {() => scrollToRecs()} >Scroll to Recommendations</button>
)
}