import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatespeakerComponent } from './createspeaker.component';

describe('CreatespeakerComponent', () => {
  let component: CreatespeakerComponent;
  let fixture: ComponentFixture<CreatespeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatespeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatespeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
