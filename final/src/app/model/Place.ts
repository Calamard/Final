import { Country } from './Country';

export interface Place{
    id:bigint;
    name:string;
    adress:string;
    city:string;
    id_country:Country;
}