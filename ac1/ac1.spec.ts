import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AC1 } from './ac1';

describe('AC1', () => {
  let component: AC1;
  let fixture: ComponentFixture<AC1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AC1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AC1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
