import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuesComponent } from './post-ques.component';

describe('PostQuesComponent', () => {
  let component: PostQuesComponent;
  let fixture: ComponentFixture<PostQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
