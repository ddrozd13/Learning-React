import axios from 'axios';

const getNews = async (category = 'all') => {
  const response = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`);

  return response.data.data;
};

export default getNews;
