'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IEvent, fetchEvents } from './a'; 
import './to.css';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data: IEvent[] = await fetchEvents();
        setTodos(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleReset = () => {
    setTodos([]); 
    localStorage.removeItem('todos');
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  if (loading) {
    return <div>Загрузка...</div>; 
  }

  return (
    <div className="container">
      <h1>Квесты</h1>

      <button className="resetButton" onClick={handleReset}>
        Сбросить
      </button>

      <ul className="todoList">
        {todos.map((event, index) => (
          <Link key={event.id} href={`./TodoList/${event.id}`}>
            <li className="todoItem fade-in">
              {event.title}
              <span 
                onClick={() => handleDelete(index)} 
                className="deleteButton"
              >
                ✖
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
