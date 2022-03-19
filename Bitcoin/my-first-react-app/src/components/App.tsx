import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (event) =>{
    setValue(event.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if(event.key === 'Enter'){
      addTodo();
    }
  }

 const addTodo = () => {
    setTodo([...todo, {
      id: Date.now(),
      title: value,
      completed: false,
    }]);
    setValue('');
  }

  const removeTodo = (id: number): void => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodo(todo.map(todo => {
      if(todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed,
      }
    }))
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
  <div>
    <div>
      <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
      <button onClick={addTodo}>Add</button>
    </div>
    <TodoList items={todo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
  </div>
  )
}

export { App };
