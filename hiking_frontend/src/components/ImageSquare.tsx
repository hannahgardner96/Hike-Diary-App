import { FunctionComponent, useState, useEffect } from "react"

// let baseURL = "http://localhost:8000/api"

let baseURL

if (process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:8000/api"
} else {
    // "https://hike-diary-backend.herokuapp.com/" in this case is the *API* url
    baseURL = 'https://hike-diary-backend.herokuapp.com/'
}
interface imageSearchProps {
    img: string
}
// FUNCTION //

    const searchImg = async (img) => {
        const url = `${baseURL}/photo_search?maxwidth=25&maxheight=25&photo_ref=${encodeURIComponent(img)}`
        const response = await fetch(url)
        const searchURL = await response.blob()
        return URL.createObjectURL(searchURL)
    }

export const ImageSquare: FunctionComponent<imageSearchProps> = ({img}) => {
    // STATE //
    // const [photoRef] = useState(img)
    const [photoURL, setPhotoURL] = useState("")

    

    // HOOKS //
    useEffect(() => {
        searchImg(img).then(setPhotoURL)
    }, [img])

    return (
        <img className = "rec-image" src = {photoURL} alt = "hike recommendation" />
    )
}

// https://codeburst.io/adding-city-images-to-your-react-app-14c937df2db2 referenced this to structure concerseion from binary to readable data