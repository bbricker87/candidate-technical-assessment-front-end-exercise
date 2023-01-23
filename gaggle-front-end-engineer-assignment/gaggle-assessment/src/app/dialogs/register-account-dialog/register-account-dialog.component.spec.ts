import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountDialogComponent } from './register-account-dialog.component';
import { FormFieldComponent } from '@app/components/form-field/form-field.component';
import { MaterialModule } from '@app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

const matDialogStub = {
  close: () => {
    return { success: true };
  },
};

describe('RegisterAccountDialogComponent', () => {
  let component: RegisterAccountDialogComponent;
  let fixture: ComponentFixture<RegisterAccountDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterAccountDialogComponent, FormFieldComponent],
      imports: [MaterialModule, ReactiveFormsModule],
      providers: [{ provide: MatDialogRef, useValue: matDialogStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
