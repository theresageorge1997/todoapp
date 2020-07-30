import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodogridComponent } from './todogrid.component';

describe('TodogridComponent', () => {
  let component: TodogridComponent;
  let fixture: ComponentFixture<TodogridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodogridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
