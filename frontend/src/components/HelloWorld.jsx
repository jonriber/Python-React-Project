// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";

import axios from "axios";

const HelloWorld = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/hello-world/')
            .then(res => {
                setMessage(res.data.message)
            })
            .catch(error => {
                console.log(error)
            })
    },[]);

    return(
        <>
            <div>
                <h1>Hello, World App!</h1>
                <p>{message}</p>
            </div>
        </>
    )
}

export default HelloWorld