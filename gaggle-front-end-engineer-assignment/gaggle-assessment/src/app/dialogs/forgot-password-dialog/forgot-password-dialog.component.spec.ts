import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordDialogComponent } from './forgot-password-dialog.component';
import { MaterialModule } from '@app/shared/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { FormFieldComponent } from '@app/components/form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';

const matDialogStub = {
  close: () => {
    return { success: true };
  },
};

describe('ForgotPasswordDialogComponent', () => {
  let component: ForgotPasswordDialogComponent;
  let fixture: ComponentFixture<ForgotPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordDialogComponent, FormFieldComponent],
      imports: [MaterialModule, ReactiveFormsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: matDialogStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
