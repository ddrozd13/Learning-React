import axios from 'axios';

export type IInsult = string;

const getInsult = async (): Promise<IInsult> => {
  const response = await axios.get<IInsult>('/generate_insult.php?lang=ru');

  return response.data;
};

export default getInsult;
