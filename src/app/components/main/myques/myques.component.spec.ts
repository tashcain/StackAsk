import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquesComponent } from './myques.component';

describe('MyquesComponent', () => {
  let component: MyquesComponent;
  let fixture: ComponentFixture<MyquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
