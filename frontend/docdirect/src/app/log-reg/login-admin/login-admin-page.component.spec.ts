import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminPageComponent } from './login-admin-page.component';

describe('LoginAdminPageComponent', () => {
  let component: LoginAdminPageComponent;
  let fixture: ComponentFixture<LoginAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
