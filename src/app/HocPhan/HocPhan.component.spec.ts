/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HocPhanComponent } from './HocPhan.component';

describe('HocPhanComponent', () => {
  let component: HocPhanComponent;
  let fixture: ComponentFixture<HocPhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocPhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocPhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
