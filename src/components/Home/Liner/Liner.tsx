'use client';
import Marquee from "react-fast-marquee";
import { images, Iimg } from './Line';
import Image from "next/image";
import './liner.css';
import Link from "next/link";

const Liner: React.FC = () => {
    return (
        <div className="top-L">
            <div className="sob">
                Рекомендуемые квесты
            </div>
            <Link href='../../TodoList'>
                <div className="marquee-container">
                    <Marquee>
                        {
                            images.map((img: Iimg, index: number) => (
                                <div key={index} className="ImgLiner">
                                    <Image
                                        src={img.img}
                                        alt={`${img.img}`}
                                        className="liner-image"
                                    />
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </Link>
        </div>
    );
}

export default Liner;
