
import Link from 'next/link';
import './Instructions.css';

const Instructions = () => {


    return (
        <div className="instructionContainer">
            <h1 className="instructionTitle">Как проходить квесты</h1>
            <p className="instructionText">
                Добро пожаловать в мир квестов с дополненной реальностью! Чтобы успешно пройти квест, следуйте этим шагам:
            </p>
            <ol className="instructionSteps">
                <li>Нажмите на кнопку "Запустить AR", чтобы открыть камеру.</li>
                <li>Сканируйте QR-код или объект, указанный в задании.</li>
                <li>Угадайте загадку или выполните задание, которое появится на экране.</li>
                <li>Следуйте инструкциям, чтобы продвигаться дальше в квесте.</li>
            </ol>
          
        </div>
    );
};

export default Instructions;
