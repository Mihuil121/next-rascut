import { cardC, ICard } from "./card";
import Image from "next/image";
import './cardCss.css';
import { Roboto } from 'next/font/google';
import { NextFont } from "next/dist/compiled/@next/font";

const RobotoText: NextFont = Roboto({
  subsets: ['latin'],
  weight: '500'
});

const RobotoDescription: NextFont = Roboto({
  subsets: ['latin'],
  weight: '400'
});

const CardBlock: React.FC = () => {
  return (
    <div>
      <div className="contentCard">
        <div className="cardBack">
          {cardC.map((card: ICard, index: number) => (
            <div className="cardMap" key={index}>
              <div className="cardMapContent" style={{ backgroundImage: `url(${card.bacK.src})` }}>
                <Image
                  src={card.icon}
                  alt={`${card.icon}`}

                />
                <div className="cardMapContentP">
                  <p className={RobotoText.className}>{card.text}</p>
                  <div className="cardMapContentP2">
                    <p className={RobotoDescription.className}>{card.discrption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardBlock;
