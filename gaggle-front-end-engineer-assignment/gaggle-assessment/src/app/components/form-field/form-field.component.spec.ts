import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';
import { MaterialModule } from '@app/shared/material.module';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldComponent],
      imports: [MaterialModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display password visibility toggle', () => {
    component.type = 'password';
    fixture.detectChanges();

    const toggle = fixture.nativeElement.querySelector(
      '.a-formField__passwordVisibility'
    );
    expect(toggle).toBeTruthy();
  });

  it('should not display password visibility toggle', () => {
    component.type = 'text';
    fixture.detectChanges();

    const toggle = fixture.nativeElement.querySelector(
      '.a-formField__passwordVisibility'
    );
    expect(toggle).toBeFalsy();
  });

  it('should clear the input field', () => {
    const control = new FormControl('defaultText');
    component.control = control;
    fixture.detectChanges();

    const clearButton = fixture.nativeElement.querySelector(
      '.a-formField__clear'
    );
    let textField = fixture.nativeElement.querySelector('.a-formField__input');

    expect(clearButton).toBeTruthy();
    expect(textField.value).toEqual('defaultText');

    clearButton.click();
    fixture.detectChanges();

    expect(textField.value).toEqual('');
  });

  it('should display email error', () => {
    const control = new FormControl('defaultText', [Validators.email]);
    control.updateValueAndValidity();
    control.markAsDirty();
    component.control = control;
    component.label = 'Test';
    fixture.detectChanges();

    const errors = fixture.nativeElement.querySelector('.a-formField__errors');

    expect(errors.innerText).toEqual('Test must be a valid email');
  });

  it('should display minimum length error', () => {
    const control = new FormControl('a', [Validators.minLength(3)]);
    control.updateValueAndValidity();
    control.markAsDirty();
    component.control = control;
    component.label = 'Test';
    fixture.detectChanges();

    const errors = fixture.nativeElement.querySelector('.a-formField__errors');

    expect(errors.innerText).toEqual('Test must be at least 3 characters');
  });

  it('should display minimum length error', () => {
    const control = new FormControl('12345678910', [Validators.maxLength(10)]);
    control.updateValueAndValidity();
    control.markAsDirty();
    component.control = control;
    component.label = 'Test';
    fixture.detectChanges();

    const errors = fixture.nativeElement.querySelector('.a-formField__errors');

    expect(errors.innerText).toEqual(
      'Test cannot have more than 10 characters'
    );
  });

  it('should display pattern error', () => {
    const control = new FormControl('1234', [Validators.pattern('[a-zA-Z]*')]);
    control.updateValueAndValidity();
    control.markAsDirty();
    component.control = control;
    component.label = 'Test';
    component.patternError = 'cannot include digits';
    fixture.detectChanges();

    const errors = fixture.nativeElement.querySelector('.a-formField__errors');

    expect(errors.innerText).toEqual('Test cannot include digits');
  });
});
