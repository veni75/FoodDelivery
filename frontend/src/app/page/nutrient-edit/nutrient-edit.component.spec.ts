import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientEditComponent } from './nutrient-edit.component';

describe('NutrientEditComponent', () => {
  let component: NutrientEditComponent;
  let fixture: ComponentFixture<NutrientEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
