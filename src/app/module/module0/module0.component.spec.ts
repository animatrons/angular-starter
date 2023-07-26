import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module0Component } from './module0.component';

describe('Module0Component', () => {
  let component: Module0Component;
  let fixture: ComponentFixture<Module0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Module0Component]
    });
    fixture = TestBed.createComponent(Module0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
