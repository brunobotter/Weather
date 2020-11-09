import { Units } from 'src/app/shared/models/units.enum';
import { DailyWeather, Weather } from 'src/app/shared/models/weather.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import 'moment/locale/pt-br';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';

@Component({
  selector: 'jv-dailey-weather',
  templateUrl: './dailey-weather.component.html',
  styleUrls: ['./dailey-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWeatherComponent {

  @Input() dailyWeather: DailyWeather;
  @Input() timeZone: string;
  @Input() unit: Units;

  get weather(): Weather {
    return this.dailyWeather.weather;
  }

  get date(): string {
    return moment.unix(this.dailyWeather.date).format('DD MMM - dddd');
  }

  get icon(): string {
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
  }

  get unitSymbol() {
    return unitToSymbol(this.unit);
  }


}
