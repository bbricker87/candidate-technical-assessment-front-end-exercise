import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  exports: [MatButtonModule, MatIconModule, MatMenuModule],
})
export class MaterialModule {}
