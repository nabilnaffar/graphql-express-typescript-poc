import axios from 'axios';
const baseUrl = 'http://localhost:3002/users';

enum CARD_SUITS{
    CLUBS,
    DIAMONDS,
    HEARTS,
    SPADES
}
export interface ICard{
    id?: string;
    color: string;
    suit: CARD_SUITS;
    number: number;
}

export function getAllCards():Promise<Array<ICard>>{
    return axios.get<Promise<Array<ICard>>>(baseUrl).then(r => r.data);
}

export function getCard(id: string):Promise<ICard>{
    return axios.get<Promise<ICard>>(`${baseUrl}/${id}`).then(r => r.data);
}

export function addCard(card: ICard):Promise<ICard>{
    const data = {
        id: Math.random().toString(36),
        ...card
    }
    return axios.post<Promise<ICard>>(baseUrl, data).then(r => r.data);
}

