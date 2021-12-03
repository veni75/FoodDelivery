import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestofComponent } from './bestof.component';

describe('BestofComponent', () => {
  let component: BestofComponent;
  let fixture: ComponentFixture<BestofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
