import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConstComponent } from './dialog-const.component';

describe('DialogConstComponent', () => {
  let component: DialogConstComponent;
  let fixture: ComponentFixture<DialogConstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
