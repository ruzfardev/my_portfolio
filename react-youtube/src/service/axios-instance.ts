import axios from 'axios';
import { APIKEY } from '../constants/keys';
export const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: APIKEY,
    regionCode: 'UZ',
  },
});
