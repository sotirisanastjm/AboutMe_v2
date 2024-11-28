import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGradientComponent } from './banner-gradient.component';

describe('BannerGradientComponent', () => {
  let component: BannerGradientComponent;
  let fixture: ComponentFixture<BannerGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGradientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
