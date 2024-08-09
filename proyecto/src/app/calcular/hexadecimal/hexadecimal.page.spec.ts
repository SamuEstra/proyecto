import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HexadecimalPage } from './hexadecimal.page';

describe('HexadecimalPage', () => {
  let component: HexadecimalPage;
  let fixture: ComponentFixture<HexadecimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HexadecimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
