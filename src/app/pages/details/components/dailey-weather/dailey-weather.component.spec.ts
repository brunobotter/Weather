import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaileyWeatherComponent } from './dailey-weather.component';

describe('DaileyWeatherComponent', () => {
  let component: DaileyWeatherComponent;
  let fixture: ComponentFixture<DaileyWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaileyWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaileyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
