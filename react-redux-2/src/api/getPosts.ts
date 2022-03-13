import axios from 'axios';

export interface IPost {
  id: number;
  title: string;
  body: string;
};
const getPosts = async (): Promise<IPost[]> => {
  const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');

  return response.data;
};

export default getPosts;
