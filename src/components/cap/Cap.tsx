import './Cap.css'
import { Roboto } from 'next/font/google'
import { AiFillHome } from "react-icons/ai";
import { SiCinema4D } from "react-icons/si";
import { MdIntegrationInstructions } from "react-icons/md";
import { BsJournalText } from "react-icons/bs";
import { NextFont } from 'next/dist/compiled/@next/font';
import Link from 'next/link';

const quando: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
})

const Cap: React.FC = () => {
    return (
        <div className="cap-bac">
            <div className="cap-home">
                <Link href='./'>
                    <p className={quando.className}><AiFillHome /> Главная</p>
                </Link>
                <Link href='./'>
                    <p className={quando.className}><SiCinema4D /> AR</p>
                </Link>
                <Link href='./'>
                    <p className={quando.className}><MdIntegrationInstructions /> Инструкция</p>
                </Link>
                <Link href='./'>
                    <p className={quando.className}><BsJournalText /> прикол</p>
                </Link>
            </div>
            <div className="cap-sing">
                <div className="sing">
                    <Link href='./'>
                        <p className={quando.className}>
                            Sing in
                        </p>
                    </Link>
                </div>
                <div className="log">
                    <Link href='./'>
                        <p className={quando.className}>
                            Log in
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cap