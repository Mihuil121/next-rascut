"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { events, IEvent } from './a'; 
import './to.css';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<IEvent[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    setTodos(savedTodos ? JSON.parse(savedTodos) : events);
  }, []);

  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleReset = () => {
    setTodos(events);
    localStorage.removeItem('todos');
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>События</h1>

      <button className="resetButton" onClick={handleReset}>
        Сбросить
      </button>

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
