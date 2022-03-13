import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { getTodo } from './store/Todo/ActionCreator';
import styles from './App.module.scss';
import { dislike, like } from './store/Likes/ActionCreator';

const App: FC = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.addPost);
  const likes = useSelector((state: RootState) => state.likePost);
  const [title,setTitle] = useState<string>();
  const [body,setBody] = useState<string>();
  const handleOnLike = (): void => {
    dispatch(like(likes))
  }
  const handleOnDislike = (): void => {
    dispatch(dislike(likes))
  }
  const handleOnAdd = (body: string, title: string) => {
    items?.push({
      id: Math.random(),
      title: title,
      body: body
    })
  }
  const handleBody = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value)
  }
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  useEffect(() => {
    dispatch(getTodo())
  }, [])
  return (
    <div>
      <div className={styles.flex}>
        <form className={styles.todo}>
          <div>
            <strong>Title: </strong>
            <input type="text" onChange={(e) => handleTitle(e)}/>
          </div>
          <div>
            <strong>Body: </strong>
            <input type="text" onChange={(e) => handleBody(e)}/>
          </div>
          <button onClick={() => handleOnAdd(body!, title!)}>Add post</button>
        </form>
      </div>
      <div className={styles.container}>
        {items && items.map((post) => (
          <div key={post.id} className={styles.todo}>
            <div><strong>Title: </strong>{post.title}</div>
            <div><strong>Body: </strong>{post.body}</div>
            <div className={styles.buttons}>
              <button onClick={handleOnLike}>&#9829;</button>
              {likes}
              <button onClick={handleOnDislike}>&#128078;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
