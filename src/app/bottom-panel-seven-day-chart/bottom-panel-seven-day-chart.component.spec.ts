import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelSevenDayChartComponent } from './bottom-panel-seven-day-chart.component';

describe('BottomPanelSevenDayChartComponent', () => {
  let component: BottomPanelSevenDayChartComponent;
  let fixture: ComponentFixture<BottomPanelSevenDayChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPanelSevenDayChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelSevenDayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
