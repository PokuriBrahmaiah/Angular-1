import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesboxComponent } from './responsesbox.component';

describe('ResponsesboxComponent', () => {
  let component: ResponsesboxComponent;
  let fixture: ComponentFixture<ResponsesboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsesboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsesboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
