import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EseComponent } from './ese.component';

describe('EseComponent', () => {
  let component: EseComponent;
  let fixture: ComponentFixture<EseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
