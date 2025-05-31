import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersPageComponent } from './masters-page.component';

describe('MastersPageComponent', () => {
  let component: MastersPageComponent;
  let fixture: ComponentFixture<MastersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MastersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
