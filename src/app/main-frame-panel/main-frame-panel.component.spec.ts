import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFramePanelComponent } from './main-frame-panel.component';

describe('MainFramePanelComponent', () => {
  let component: MainFramePanelComponent;
  let fixture: ComponentFixture<MainFramePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFramePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFramePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
