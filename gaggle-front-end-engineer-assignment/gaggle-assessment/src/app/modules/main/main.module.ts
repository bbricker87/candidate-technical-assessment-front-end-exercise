import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@app/components/home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '@app/shared/material.module';
import { ComponentsModule } from '@app/shared/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MainRoutingModule, ComponentsModule, MaterialModule],
})
export class MainModule {}
