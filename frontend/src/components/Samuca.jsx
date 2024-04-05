// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react"


const Samuca = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('http://localhost:8000/api/samuca/')
            .then(res => res.json())
            .then(res => {
                setMessage(res.message)
            })
            .catch(error => {
                console.log(error)
            })
    },[]);

    return(
        <>
            <div>
                <h1>Samuca App!</h1>
                <p>{message}</p>
            </div>
        </>
    )
}

export default Samuca