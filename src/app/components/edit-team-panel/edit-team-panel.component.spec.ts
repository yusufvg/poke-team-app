import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamPanelComponent } from './edit-team-panel.component';

describe('EditTeamPanelComponent', () => {
  let component: EditTeamPanelComponent;
  let fixture: ComponentFixture<EditTeamPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeamPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
