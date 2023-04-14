import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelSevenDayForcastComponent } from './bottom-panel-seven-day-forcast.component';

describe('BottomPanelSevenDayForcastComponent', () => {
  let component: BottomPanelSevenDayForcastComponent;
  let fixture: ComponentFixture<BottomPanelSevenDayForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPanelSevenDayForcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelSevenDayForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
