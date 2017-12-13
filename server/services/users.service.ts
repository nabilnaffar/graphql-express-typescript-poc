import axios from 'axios';
const baseUrl = 'http://localhost:3002/users';

export interface IUser{
    id?: string;
    name: string;
    age: number;
}

export function getAllUsers():Promise<Array<IUser>>{
    return axios.get<Promise<Array<IUser>>>(baseUrl).then(r => r.data);
}

export function getUser(id: string):Promise<IUser>{
    return axios.get<Promise<IUser>>(`${baseUrl}/${id}`).then(r => r.data);
}

export function addUser(user: IUser):Promise<IUser>{
    const data = {
        id: Math.random().toString(36),
        ...user
    }
    return axios.post<Promise<IUser>>(baseUrl, data).then(r => r.data);
}

export function updateUser(data: IUser):Promise<IUser>{
    return axios.post<Promise<IUser>>(`${baseUrl}/${data.id}`, {data}).then(r => r.data);
}
