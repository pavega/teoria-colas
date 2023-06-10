import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Md1Component } from './md1.component';

describe('Md1Component', () => {
  let component: Md1Component;
  let fixture: ComponentFixture<Md1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Md1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Md1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
