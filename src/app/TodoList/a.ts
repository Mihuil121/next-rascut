import axios from 'axios';

// Интерфейс для описания события
export interface IEvent {
    id: number;
    title: string;
    description: string;
    images: string[]; // Изменено на массив строк для хранения URL изображений
}

// Функция для получения событий
export const fetchEvents = async (): Promise<IEvent[]> => {
    try {
        const response = await axios.get('https://poezd.data92.ru/api/quests');
        
        // Логируем весь ответ для проверки
        console.log('Response from API:', response.data);

        // Проверяем, существует ли массив data и является ли он массивом
        if (response.data && Array.isArray(response.data.data)) {
            return response.data.data.map((item: any) => {
                let images: string[] = [];
                try {
                    // Парсим строку JSON в массив
                    images = JSON.parse(item.images);
                } catch (e) {
                    console.error('Ошибка при парсинге изображений:', e);
                }

                // Логируем каждое событие для проверки
                console.log('Event item:', item);

                return {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    images: Array.isArray(images) ? images : [], // Убедимся, что images - это массив
                };
            });
        } else {
            // Если данные не содержат массив data, выводим ошибку
            console.error('Полученные данные не содержат массив data:', response.data);
            return [];
        }
    } catch (error) {
        // Обработка ошибок запроса
        console.error('Ошибка при получении данных:', error);
        return [];
    }
};
