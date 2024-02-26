import axios from 'axios';
import urls from '../constants/urls';
import { showErrorPage } from '../errors';

export async function retrieveAccessToken(code) {
    try {
        const response = await axios.post(urls.api.auth.accessToken(code));
        localStorage.setItem('id_token', response.data.id_token);
        localStorage.setItem('access_token', response.data.access_token);
        window.location.replace('/');
    }
    catch {
        showErrorPage(403);
    }
}