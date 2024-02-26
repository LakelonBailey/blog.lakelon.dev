const urls = {
    api: {
        login: '/api/login/',
        auth: {
            accessToken: (code) => `/api/auth/access-token/${code}/`
        }
    }
}

export default urls;