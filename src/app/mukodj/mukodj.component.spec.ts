import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MukodjComponent } from './mukodj.component';

describe('MukodjComponent', () => {
  let component: MukodjComponent;
  let fixture: ComponentFixture<MukodjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MukodjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MukodjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
