import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizonHeaderComponent } from './horizon-header.component';

describe('HorizonHeaderComponent', () => {
  let component: HorizonHeaderComponent;
  let fixture: ComponentFixture<HorizonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
