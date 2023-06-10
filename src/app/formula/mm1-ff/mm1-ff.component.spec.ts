import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mm1FfComponent } from './mm1-ff.component';

describe('Mm1FfComponent', () => {
  let component: Mm1FfComponent;
  let fixture: ComponentFixture<Mm1FfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mm1FfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mm1FfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
