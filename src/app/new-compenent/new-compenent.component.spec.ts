import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompenentComponent } from './new-compenent.component';

describe('NewCompenentComponent', () => {
  let component: NewCompenentComponent;
  let fixture: ComponentFixture<NewCompenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCompenentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
