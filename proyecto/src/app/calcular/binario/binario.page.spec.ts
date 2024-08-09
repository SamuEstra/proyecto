import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinarioPage } from './binario.page';

describe('BinarioPage', () => {
  let component: BinarioPage;
  let fixture: ComponentFixture<BinarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
