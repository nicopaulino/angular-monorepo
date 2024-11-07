import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskSharedComponent } from './task-shared.component';

describe('SharedUiComponent', () => {
  let component: TaskSharedComponent;
  let fixture: ComponentFixture<TaskSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
