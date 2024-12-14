import card1 from '../../../img/card1.webp'
import card2 from '../../../img/card2.webp'
import card3 from '../../../img/card3.webp'
import icon1 from '../../../img/1.jpeg'
import icon2 from '../../../img/2.jpeg'
import icon3 from '../../../img/3.jpeg'
import { StaticImageData } from 'next/image'

export interface ICard{
    text:string,
    bacK:StaticImageData,
    icon:StaticImageData,
    discrption:string
}

export const cardC:ICard[] = [
    {
        text: ' Сканируйте и Узнавайте',
        bacK: card1,
        icon: icon1,
        discrption: "Взаимодействуйте с AR-элементами и улучшайте свои знания. Преимущество: Интересно и увлекательно.",
    },
    {
        text: ' Сканируйте и Узнавайте',
        bacK: card2,
        icon: icon2,
        discrption: "Взаимодействуйте с AR-элементами и улучшайте свои знания. Преимущество: Интересно и увлекательно.",
    },
    {
        text: ' Сканируйте и Узнавайте',
        bacK: card3,
        icon: icon3,
        discrption: "Взаимодействуйте с AR-элементами и улучшайте свои знания. Преимущество: Интересно и увлекательно.",
    }
]