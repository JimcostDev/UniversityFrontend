import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAssignmentEditComponent } from './office-assignment-edit.component';

describe('OfficeAssignmentEditComponent', () => {
  let component: OfficeAssignmentEditComponent;
  let fixture: ComponentFixture<OfficeAssignmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAssignmentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAssignmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
