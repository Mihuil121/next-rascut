// src/app/TodoList/page.tsx
"use client"; // Убедитесь, что этот импорт присутствует

import Link from 'next/link';
import { useState } from 'react';
import { events, IEvent } from './a'; // Импортируйте массив событий
import './to.css';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<IEvent[]>(events); // Используйте массив событий

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index)); // Удаление события по индексу
  };

  return (
    <div className="container">
      <h1>События</h1>

      <ul className="todoList">
        {todos.map((event, index) => (
          <li key={index} className="todoItem fade-in">
            <Link href={`./TodoList/${index}`}>
              {event.title}
            </Link>
            <span 
              onClick={() => handleDelete(index)} 
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
