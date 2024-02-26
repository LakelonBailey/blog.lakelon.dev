import React from "react";
import { auth } from "../../utils/constants";

export default function Home() {
    const login = () => {
        const url = `${auth.ssoHost}?client_id=${auth.ssoClientID}&redirect_uri=${auth.ssoRedirectUri()}`
        window.location.replace(url);
    }

    return (
        <h1><button onClick={login}>Login</button></h1>
    )
}
