"use client";
import { useParams } from 'next/navigation';
import { events, IEvent } from '../a';
import { useEffect, useState } from 'react';
import './style.css';
import Image from 'next/image';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google'
import Link from 'next/link';

const quando: NextFont = Roboto({
  subsets: ['latin'],
  weight: '500'
})

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения

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
    <div className="Image-events">
      <div className="event-container">
        <div className="image-wrapper">
        </div>
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description">{event.description}</p>
        <Link href='/'>
          <button
            className={`quest-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className={quando.className}>
              Выполнить квест
            </p>
          </button>
        </Link>
      </div>
      <div className="Image-events-i">
        {event.img && (
          <Image
            src={event.img}
            alt={event.title}
          />
        )}
      </div>
    </div>
  );
};

export default EventDetail;
