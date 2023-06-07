/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiemComponent } from './Diem.component';

describe('DiemComponent', () => {
  let component: DiemComponent;
  let fixture: ComponentFixture<DiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
