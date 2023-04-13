import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelRainfallsComponent } from './bottom-panel-rainfalls.component';

describe('BottomPanelRainfallsComponent', () => {
  let component: BottomPanelRainfallsComponent;
  let fixture: ComponentFixture<BottomPanelRainfallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPanelRainfallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelRainfallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
