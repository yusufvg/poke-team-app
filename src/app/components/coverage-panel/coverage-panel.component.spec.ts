import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragePanelComponent } from './coverage-panel.component';

describe('CoveragePanelComponent', () => {
  let component: CoveragePanelComponent;
  let fixture: ComponentFixture<CoveragePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveragePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
