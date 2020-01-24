import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalonComponent } from './createsalon.component';

describe('CreatesalonComponent', () => {
  let component: CreatesalonComponent;
  let fixture: ComponentFixture<CreatesalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
