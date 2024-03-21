import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensageBoxComponent } from './mensage-box.component';

describe('MensageBoxComponent', () => {
  let component: MensageBoxComponent;
  let fixture: ComponentFixture<MensageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensageBoxComponent]
    });
    fixture = TestBed.createComponent(MensageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
