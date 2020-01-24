import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkformComponent } from './talkform.component';

describe('TalkformComponent', () => {
  let component: TalkformComponent;
  let fixture: ComponentFixture<TalkformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
