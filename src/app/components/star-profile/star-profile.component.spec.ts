import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarProfileComponent } from './star-profile.component';

describe('StarProfileComponent', () => {
  let component: StarProfileComponent;
  let fixture: ComponentFixture<StarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
