import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsUsersComponent } from './doctors-users.component';

describe('DoctorsUsersComponent', () => {
  let component: DoctorsUsersComponent;
  let fixture: ComponentFixture<DoctorsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
