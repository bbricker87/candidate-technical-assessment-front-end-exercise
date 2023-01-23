import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionsComponent } from './page-actions.component';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { MaterialModule } from '@app/shared/material.module';

describe('PageActionsComponent', () => {
  let component: PageActionsComponent;
  let fixture: ComponentFixture<PageActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageActionsComponent, ButtonGroupComponent],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
