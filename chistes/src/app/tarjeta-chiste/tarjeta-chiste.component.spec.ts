import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaChisteComponent } from './tarjeta-chiste.component';

describe('TarjetaChisteComponent', () => {
  let component: TarjetaChisteComponent;
  let fixture: ComponentFixture<TarjetaChisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaChisteComponent]
    });
    fixture = TestBed.createComponent(TarjetaChisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
