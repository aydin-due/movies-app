import axios from 'axios'

export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_MOVIEDB_URL,
    params: {
        language: 'en-US',
        api_key: process.env.EXPO_PUBLIC_MOVIEDB_KEY,
    }
})