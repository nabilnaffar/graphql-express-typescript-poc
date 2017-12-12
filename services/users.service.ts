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

export function getAllUsers():Promise<Array<IUser>>{
    return Promise.resolve(mydb);
}

export function getUser(id: string):Promise<IUser>{
    return Promise.resolve(mydb.find(u => u.id === id));
}

export function addUser(data: IUser):Promise<IUser>{
    const user = {
        id: Math.random().toString(36),
        ...data
    }
    mydb.push(user);
    return Promise.resolve(user);
}

export function updateUser(data: IUser):Promise<IUser>{
    const user = mydb.find(u => u.id === data.id);
    if(!user){
        return;
    }
    user.age = data.age;
    user.name = data.name;
    return Promise.resolve(user);
}
