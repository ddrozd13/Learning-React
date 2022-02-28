import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { getTodo } from './store/Todo/ActionCreator';
import styles from './App.module.scss';
import { likePost } from './store/Todo/Reducers';

const App: FC = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.addPost);
  const { likes } = useSelector((state: RootState) => state.likePost);
  const handleOnClick = () => {
    dispatch(likePost())
  }
  useEffect(() => {
    dispatch(getTodo())
  }, [])
  return (
    <div>
      <div className={styles.container}>
        {items && items.map((post) => (
          <div key={post.id} className={styles.todo}>
            <div><strong>Title: </strong>{post.title}</div>
            <div><strong>Body: </strong>{post.body}</div>
            <div className={styles.buttons}>
              <button onClick={handleOnClick}>{likes}&#9829;</button>
              <button>&#128078;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
