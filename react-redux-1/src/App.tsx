import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { deleteCurrentDate, getCurrentDate } from './store/home';

const App: FC = () => {
  const { currentDate } = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteCurrentDate());
  };

  useEffect(() => {
    dispatch(getCurrentDate())
  }, [])
  return (
    <div>
      <button onClick={handleClick}>Delete</button>
      {!currentDate && <h1>Loading...</h1>}
      {currentDate && currentDate.toISOString()}

    </div>
  );
};

export default App;
