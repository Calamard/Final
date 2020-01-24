import { User } from './User';
import { Event } from './Event';

export interface UserEvent{
    id:bigint;
    id_user:User;
    id_event:Event;
}