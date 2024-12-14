'use client'
import React, { useRef } from 'react';
import HomeBack from "./homeBack/homeBack";
import CardBlock from "./card-block/CardBlock";
import Liner from "./Liner/Liner";

const HomeOne: React.FC = () => {
    const cardBlockRef = useRef<HTMLDivElement>(null);

    const scrollToCardBlock = () => {
        if (cardBlockRef.current) {
            cardBlockRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <HomeBack scrollToCardBlock={scrollToCardBlock} />
            <Liner />
            <div ref={cardBlockRef}>
                <CardBlock />
            </div>
        </div>
    );
}

export default HomeOne;
