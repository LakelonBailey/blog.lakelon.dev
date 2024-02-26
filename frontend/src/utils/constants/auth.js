const auth = {
    ssoHost: process.env.REACT_APP_SSO_HOST,
    ssoClientID: process.env.REACT_APP_SSO_CLIENT_ID,
    ssoRedirectUri: () => {
        if (window.location.hostname.includes('lakelon.dev')) {
            return `${window.location.origin}/auth/sso/callback`
        }
        return 'http://localhost:3000/auth/sso/callback/'
    }
}

export default auth;