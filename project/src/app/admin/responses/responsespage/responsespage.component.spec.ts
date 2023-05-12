import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsespageComponent } from './responsespage.component';

describe('ResponsespageComponent', () => {
  let component: ResponsespageComponent;
  let fixture: ComponentFixture<ResponsespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
