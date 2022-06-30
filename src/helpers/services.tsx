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
};
