import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import { useSearchParams } from "react-router-dom";
import { retrieveAccessToken } from "../../utils/auth";

export default function AuthHandler() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        retrieveAccessToken(code);
    });

    return (
        <div
        className=" bg-slate-800"
        style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <h1 className="text-4xl text-slate-300 mb-3">Authenticating</h1> <Loader/>
        </div>
    )
}
