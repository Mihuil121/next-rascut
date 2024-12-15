'use client';
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

  const handleDelete = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Остановить всплытие события
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
          <li key={event.id} className="todoItem fade-in">
            <Link href={`./TodoList/${event.id}`}>
              {event.title}
            </Link>
            <span 
              onClick={(e) => handleDelete(index, e)} 
              className="deleteButton"
            >
              ✖
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
