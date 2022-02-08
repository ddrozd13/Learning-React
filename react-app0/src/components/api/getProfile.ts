import { IUsers } from './getUsers';
import axios from 'axios';

const getProfile = async (id: number): Promise<IUsers> => {
  const response = await axios.get<IUsers>(`https://jsonplaceholder.typicode.com/users/${id}`);

  return response.data;
};

export default getProfile;
