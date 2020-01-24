import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetalkComponent } from './createtalk.component';

describe('CreatetalkComponent', () => {
  let component: CreatetalkComponent;
  let fixture: ComponentFixture<CreatetalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
