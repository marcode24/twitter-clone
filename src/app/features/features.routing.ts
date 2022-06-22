import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

import { HomeRoutingModule } from "./home/home.routing";

const routes: Routes = [
  {
    path: 'home',
    component: FeaturesComponent,
    loadChildren: () => import('./home/home.routing').then(m => m.HomeRoutingModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeRoutingModule
  ],
  exports: [
    RouterModule,
  ]
})
export class FeaturesRoutingModule {}
