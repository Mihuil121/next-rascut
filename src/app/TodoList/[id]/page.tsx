"use client";

import { useParams } from 'next/navigation';
import { IEvent, fetchEvents } from '../a'; 
import { useEffect, useState } from 'react';
import './style.css';
import Image from 'next/image';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

const quando: NextFont = Roboto({
  subsets: ['latin'],
  weight: '500'
});

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    const loadEvent = async () => {
      if (id) {
        try {
          const events: IEvent[] = await fetchEvents(); 
          const eventId = Number(id); // Преобразуем id в число
          const foundEvent = events.find(event => event.id === eventId); // Ищем событие по ID
          
          if (foundEvent) {
            setEvent(foundEvent); 
          } else {
            console.error('Событие не найдено');
          }
        } catch (error) {
          console.error('Ошибка при загрузке события:', error);
        }
      }
    };

    loadEvent();
  }, [id]);

  if (!event) {
    return <div className="event-container">Событие не найдено</div>;
  }

  return (
    <div className="Image-events">
      <div className="event-container">
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description">{event.description}</p>
        <Link href='https://web.webar-studio.com/v2/0357989749/'>
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
      <div className="image-gallery">
        {event.images && event.images.length > 0 && (
          <Image
            src={event.images[0]}
            alt={event.title}
            layout="responsive" 
            width={700}
            height={500} 
          />
        )}
      </div>
    </div>
  );
};

export default EventDetail;
