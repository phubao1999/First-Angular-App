import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPipesComponent } from './learn-pipes.component';

describe('LearnPipesComponent', () => {
  let component: LearnPipesComponent;
  let fixture: ComponentFixture<LearnPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
