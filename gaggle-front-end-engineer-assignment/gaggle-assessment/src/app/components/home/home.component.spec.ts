import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '@app/layouts/header/header.component';
import { PageActionsComponent } from '../utils/page-actions/page-actions.component';
import { ButtonGroupComponent } from '../utils/button-group/button-group.component';
import { MaterialModule } from '@app/shared/material.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderComponent,
        PageActionsComponent,
        ButtonGroupComponent,
      ],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
