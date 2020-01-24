import { Login } from './Login';

export interface User {
    name:string;
    lastname:string;
    genre:string;
    rut:string;
    age:number;
    type:string;
    id_login:Login;
    
}