import React from 'react';
import './homeBack.css';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import photo1 from '../../../img/phone.jpeg'
import { Montserrat } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';

const textFont: NextFont = Montserrat({
    subsets: ['latin'],
    weight: "500"
})

const HomeBack: React.FC = () => {
    return (
        <div>
            <div className="home">
                <div className="content">
                    <div className="text">
                        <div className="block-text">
                            <p className={textFont.className}>
                                Инновационные решения для рассказа истории
                            </p>
                        </div>
                        <div className="blok-but">
                            <div className="but">
                                <button className={textFont.className}>
                                    О проекте
                                </button>
                                <FaArrowRight className="arrow" style={{ marginTop: '0.2rem' }} />
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <Image
                            src={photo1}
                            alt={`${photo1}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBack; 
