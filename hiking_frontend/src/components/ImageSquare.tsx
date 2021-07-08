import { FunctionComponent, useState, useEffect } from "react"

let baseURL = "http://localhost:8000/api"

// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://localhost:3003';
// } else {
//     // "https://morning-river-69185.herokuapp.com/" in this case is the *API* url
//     baseURL = 'https://morning-river-69185.herokuapp.com';
// }

interface imageSearchProps {
    img: string
}

export const ImageSquare: FunctionComponent<imageSearchProps> = ({img}) => {
    // STATE //
    // const [photoRef] = useState(img)
    const [photoURL, setPhotoURL] = useState("")

    // API REQ //
    useEffect(() => {
        const url = `${baseURL}/photo_search?photo_ref=${encodeURIComponent(img)}`
        fetch(url)
            .then(data => {
                return data.blob()!
            }, error => error)
            .then(binaryData => {
                // convert to Base64
                const base64Data = btoa(binaryData);
                setPhotoURL(`data:image/png;base64,${base64Data}`)
            }, error => {
                console.log(error)
            })
    }, [img])

    return (
        <img src = {photoURL} />
    )
}