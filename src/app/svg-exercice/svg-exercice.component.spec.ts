import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgExerciceComponent } from './svg-exercice.component';

describe('SvgExerciceComponent', () => {
  let component: SvgExerciceComponent;
  let fixture: ComponentFixture<SvgExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgExerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
