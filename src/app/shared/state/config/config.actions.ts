import { Units } from 'src/app/shared/models/units.enum';
import { createAction, props } from '@ngrx/store';
export const updateUnit = createAction(
    '[Config] Update Unit',
    props<{ unit: Units }>(),
   );