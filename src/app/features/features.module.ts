import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

import { ComponentsModule } from '@components/components.module';

import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeModule
  ]
})
export class FeaturesModule { }
