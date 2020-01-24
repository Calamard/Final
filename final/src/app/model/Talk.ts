import { NumberValueAccessor } from '@angular/forms';

export interface Talk{
    id:bigint;
    name:string;
    description:string;
    duration:NumberValueAccessor;
    id_speker;
    id_category;
    id_salon;
}