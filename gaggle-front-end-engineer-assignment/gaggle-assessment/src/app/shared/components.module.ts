import { NgModule } from '@angular/core';
import { ButtonGroupComponent } from '@app/components/utils/button-group/button-group.component';
import { PageActionsComponent } from '@app/components/utils/page-actions/page-actions.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ButtonGroupComponent, PageActionsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ButtonGroupComponent, PageActionsComponent],
})
export class ComponentsModule {}
