import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayaPage } from './maya.page';

describe('MayaPage', () => {
  let component: MayaPage;
  let fixture: ComponentFixture<MayaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
