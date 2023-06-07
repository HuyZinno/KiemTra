/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiaoVienComponent } from './GiaoVien.component';

describe('GiaoVienComponent', () => {
  let component: GiaoVienComponent;
  let fixture: ComponentFixture<GiaoVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaoVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
