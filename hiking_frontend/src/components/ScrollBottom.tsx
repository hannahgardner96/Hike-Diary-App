export const ScrollBottom = () => {
        // VARIABLES //
        const diaryEntriesElement = document.getElementById("diary-entries-main-elem")!

        // FUNCTIONS //
        const scrollToHikes = () => {
            diaryEntriesElement.scrollIntoView({
                behavior: 'smooth'
        })
    }

    return (
        <button style = {{backgroundColor: "white"}} onClick = {() => scrollToHikes()} >Scroll to My Hikes</button>
    )
    }