import { axiosInstance } from '../service/axios-instance';
const fetchVideos = async () => {
  const response = await axiosInstance.get('/videos', {
    params: {
      chart: 'mostPopular',
      regionCode: 'RU',
      maxResults: 28,
    },
  });
  return response.data;
};

export const searchVideos = async (term: string) => {
  const res = await axiosInstance.get('/search', {
    params: {
      q: term,
      maxResults: 28,
    },
  });
  return res.data;
};

export default fetchVideos;
