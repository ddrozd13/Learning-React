import axios, { AxiosResponse } from 'axios';
import { FC, Fragment, useEffect, useState } from 'react';

type IInsult = string;

const GetInsult: FC = () => {
  const [insult, setInsult] = useState<IInsult>('');
  useEffect(() => {
    axios.get('/generate_insult.php?lang=ru')
    .then((response: AxiosResponse) => {
      setInsult(response.data);
    });
  });

  return (
    <Fragment>
      <div>
        {insult.charAt(0).toUpperCase() + insult.slice(1)}
      </div>
    </Fragment>
  )
};

export default GetInsult;
