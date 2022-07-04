import axios from 'axios';
import { url } from '../constants';

export default {
    async login(username: string, password: string) {
        try {
            const res = await axios.post(url.loginUrl, {
                userid: username,
                password,
            });
            return res;
        } catch (error: any) {
            throw error;
        }
    },

    async get(url: string, token?: string) {
        try {
            const res = await axios.get(url, {
                headers: {
                    authorization: token ? 'Bearer ' + token : '',
                },
            });

            return res;
        } catch (error) {
            throw error;
        }
    },
};
