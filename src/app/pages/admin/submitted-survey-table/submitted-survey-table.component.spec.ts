import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedSurveyTableComponent } from './submitted-survey-table.component';

describe('SubmittedSurveyTableComponent', () => {
  let component: SubmittedSurveyTableComponent;
  let fixture: ComponentFixture<SubmittedSurveyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedSurveyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedSurveyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
