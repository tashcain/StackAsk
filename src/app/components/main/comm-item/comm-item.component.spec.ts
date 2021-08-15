import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommItemComponent } from './comm-item.component';

describe('CommItemComponent', () => {
  let component: CommItemComponent;
  let fixture: ComponentFixture<CommItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
