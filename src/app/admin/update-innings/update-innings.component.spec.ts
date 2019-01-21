import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInningsComponent } from './update-innings.component';

describe('UpdateInningsComponent', () => {
  let component: UpdateInningsComponent;
  let fixture: ComponentFixture<UpdateInningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
