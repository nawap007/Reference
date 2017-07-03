import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuitindirComponent } from './buitindir.component';

describe('BuitindirComponent', () => {
  let component: BuitindirComponent;
  let fixture: ComponentFixture<BuitindirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuitindirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuitindirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
