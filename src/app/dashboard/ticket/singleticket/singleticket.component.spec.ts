import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleticketComponent } from './singleticket.component';

describe('SingleticketComponent', () => {
  let component: SingleticketComponent;
  let fixture: ComponentFixture<SingleticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleticketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
