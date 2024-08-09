import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OctalPage } from './octal.page';

describe('OctalPage', () => {
  let component: OctalPage;
  let fixture: ComponentFixture<OctalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OctalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
