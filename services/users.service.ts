export interface IUser{
    id?: string;
    name: string;
    age: number;
}

export interface UserServiceApi{
    getAllUsers():Array<IUser>;
    getUser(id:string):IUser;
    addUser(IUser):void;
}


const mydb = [
    {id: 'a', name: 'Nabil', age: 29}
] as Array<IUser>;

export function getAllUsers():Array<IUser>{
    return mydb;
}

export function getUser(id: string):IUser{
    return mydb.find(u => u.id === id);
}

export function addUser(data: IUser):IUser{
    const user = {
        id: Math.random().toString(36),
        ...data
    }
    mydb.push(user);
    return user;
}

export function updateUser(data: IUser):IUser{
    const user = mydb.find(u => u.id === data.id);
    if(!user){
        return;
    }
    user.age = data.age;
    user.name = data.name;
    return user;
}
