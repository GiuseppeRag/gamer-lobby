import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPlayerComponent } from './join-player.component';

describe('JoinPlayerComponent', () => {
  let component: JoinPlayerComponent;
  let fixture: ComponentFixture<JoinPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
