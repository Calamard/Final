import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonformComponent } from './salonform.component';

describe('SalonformComponent', () => {
  let component: SalonformComponent;
  let fixture: ComponentFixture<SalonformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
