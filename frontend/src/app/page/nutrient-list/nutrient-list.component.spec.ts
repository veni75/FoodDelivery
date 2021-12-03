import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientListComponent } from './nutrient-list.component';

describe('NutrientListComponent', () => {
  let component: NutrientListComponent;
  let fixture: ComponentFixture<NutrientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
