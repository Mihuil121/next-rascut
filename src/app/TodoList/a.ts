import axios from 'axios';

export interface IEvent {
    id: number;
    title: string;
    description: string;
    images: string; // Убедитесь, что это свойство существует
}

export const fetchEvents = async (): Promise<IEvent[]> => {
    const response = await axios.get('http://poezd.data92.ru/api/quests');
    
    // Логируем весь ответ для проверки
    console.log(response);

    // Проверяем, существует ли массив data и является ли он массивом
    if (response.data && Array.isArray(response.data.data)) {
        return response.data.data.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            images: item.images || '', // Используем URL изображения, если он существует
        }));
    } else {
        // Если данные не содержат массив data, выводим ошибку
        console.error('Полученные данные не содержат массив data:', response.data);
        return [];
    }
};
