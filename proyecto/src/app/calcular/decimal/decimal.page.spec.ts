import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecimalPage } from './decimal.page';

describe('DecimalPage', () => {
  let component: DecimalPage;
  let fixture: ComponentFixture<DecimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
