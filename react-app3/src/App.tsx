import { FC } from 'react';
import Header from './components/Header/Header';

const App: FC = () => {
  const handleOnClick = () => {
    console.log('11111')
  }

  return (
    <div>
      <Header onClick={handleOnClick}>
        Title
      </Header>
      <Header onClick={handleOnClick} buttonText='Save'>
        Title
      </Header>
      Hello world
    </div>
  );
}

export default App;
