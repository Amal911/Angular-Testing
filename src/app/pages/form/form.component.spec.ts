import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormControl } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a form with username and password fields', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('input[type="text"][formControlName="username"]')).toBeTruthy();
    expect(compiled.querySelector('input[type="password"][formControlName="password"]')).toBeTruthy();
  });

  it('should mark username field as invalid if left empty', () => {
    const usernameControl = component.login.get('username') as FormControl;
    usernameControl.setValue('');
    expect(usernameControl.valid).toBeFalsy();
  });
  it('should mark username field as invalid if length is less than 4', () => {
    const usernameControl = component.login.get('username') as FormControl;
    usernameControl.setValue('anu');
    expect(usernameControl.valid).toBeFalsy();
  });

  it('should mark password field as invalid if left empty', () => {
    const passwordControl = component.login.get('password') as FormControl;
    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalsy();
  });
  it('should mark password field as invalid if length is less than 8', () => {
    const passwordControl = component.login.get('password') as FormControl;
    passwordControl.setValue('123456');
    expect(passwordControl.valid).toBeFalsy();
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });

});
