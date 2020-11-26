import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOccasionFormComponent } from './add-occasion-form.component';

describe('AddOccasionFormComponent', () => {
  let component: AddOccasionFormComponent;
  let fixture: ComponentFixture<AddOccasionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOccasionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOccasionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
