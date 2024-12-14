"use client"; 
import { useParams } from 'next/navigation';
import { events, IEvent } from '../a';
import { useEffect, useState } from 'react';
import './style.css'; // Импортируйте ваш CSS файл

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);

  useEffect(() => {
    if (id) {
      const eventIndex = Number(id);
      if (eventIndex >= 0 && eventIndex < events.length) {
        setEvent(events[eventIndex]); 
      }
    }
  }, [id]);

  if (!event) {
    return <div className="event-container">Событие не найдено</div>;
  }

  return (
    <div className="event-container">
      <div className="image-wrapper">
        {/*<img src={event.imageUrl} alt={event.title} /> */}
      </div>
      <h1 className="event-title">{event.title}</h1>
      <p className="event-description">{event.description}</p>
    </div>
  );
};

export default EventDetail;
