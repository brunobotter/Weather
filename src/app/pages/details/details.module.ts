import { DailyWeatherComponent } from './components/dailey-weather/dailey-weather.component';
import { DetailsEffects } from './state/details.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DetailsGuardService } from './services/details.guard';
import { detailsReducer } from './state/details.reducer';



@NgModule({
  declarations: [DetailsPage, DailyWeatherComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    RouterModule.forChild([{path: '', component: DetailsPage, canActivate: [DetailsGuardService]}, 
    ])
  ],
  providers: [
    DetailsGuardService
  ]
})
export class DetailsModule { }
