import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFocusComponent } from './banner-focus.component';

describe('BannerFocusComponent', () => {
  let component: BannerFocusComponent;
  let fixture: ComponentFixture<BannerFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
