import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngFeaturesComponent } from './ang-features.component';

describe('AngFeaturesComponent', () => {
  let component: AngFeaturesComponent;
  let fixture: ComponentFixture<AngFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
