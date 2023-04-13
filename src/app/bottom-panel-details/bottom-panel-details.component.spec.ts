import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPanelDetailsComponent } from './bottom-panel-details.component';

describe('BottomPanelDetailsComponent', () => {
  let component: BottomPanelDetailsComponent;
  let fixture: ComponentFixture<BottomPanelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPanelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomPanelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
