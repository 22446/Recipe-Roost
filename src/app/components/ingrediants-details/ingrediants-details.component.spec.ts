import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantsDetailsComponent } from './ingrediants-details.component';

describe('IngrediantsDetailsComponent', () => {
  let component: IngrediantsDetailsComponent;
  let fixture: ComponentFixture<IngrediantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrediantsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngrediantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
