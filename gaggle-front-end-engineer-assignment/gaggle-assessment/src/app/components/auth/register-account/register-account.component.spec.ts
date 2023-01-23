import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountComponent } from './register-account.component';
import { MaterialModule } from '@app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

const matDialogRefStub = {
  afterClosed: () => {
    return of({ success: true });
  },
};

const matDialogStub = {
  open: () => {
    return matDialogRefStub;
  },
};

describe('RegisterAccountComponent', () => {
  let component: RegisterAccountComponent;
  let fixture: ComponentFixture<RegisterAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterAccountComponent],
      imports: [MaterialModule, RouterTestingModule],
      providers: [{ provide: MatDialog, useValue: matDialogStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
