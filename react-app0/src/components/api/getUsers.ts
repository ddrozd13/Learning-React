import axios from 'axios';

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name:string;
    catchPhrase: string;
    bs: string;
  };
};

const getUsers = async (): Promise<IUsers[]> => {
  const response = await axios.get<IUsers[]>(`https://jsonplaceholder.typicode.com/users/`);

  return response.data;
};

export default getUsers;
