import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAutoscaleComponent } from './create-edit-autoscale.component';

describe('CreateEditAutoscaleComponent', () => {
  let component: CreateEditAutoscaleComponent;
  let fixture: ComponentFixture<CreateEditAutoscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditAutoscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAutoscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
