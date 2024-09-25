import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMealComponent } from './details-meal.component';

describe('DetailsMealComponent', () => {
  let component: DetailsMealComponent;
  let fixture: ComponentFixture<DetailsMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
