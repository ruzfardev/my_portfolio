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

export default fetchVideos;
