import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMensageComponent } from './text-mensage.component';

describe('TextMensageComponent', () => {
  let component: TextMensageComponent;
  let fixture: ComponentFixture<TextMensageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMensageComponent]
    });
    fixture = TestBed.createComponent(TextMensageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
