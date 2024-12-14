import p1 from '../../../img/p/p1.jpg';
import p2 from '../../../img/p/p2.jpg';
import p3 from '../../../img/p/p3.jpg';
import p4 from '../../../img/p/p4.jpg';
import p5 from '../../../img/p/p5.jpg';
import p6 from '../../../img/p/p6.jpg';
import p7 from '../../../img/p/p7.jpg';
import p8 from '../../../img/p/p8.jpg';
import p9 from '../../../img/p/p9.jpg';
import p10 from '../../../img/p/p10.jpg';
import p11 from '../../../img/p/p11.jpg';
import { StaticImageData } from 'next/image';

export interface Iimg {
    img: StaticImageData;
}

export const images: Iimg[] = [
    { img: p1 },
    { img: p2 },
    { img: p3 },
    { img: p4 },
    { img: p5 },
    { img: p6 },
    { img: p7 },
    { img: p8 },
    { img: p9 },
    { img: p10 },
    { img: p11 },
];


