import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthRoutingModule } from "./auth/auth.routing";
import { FeaturesRoutingModule } from "./features/features.routing";

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // home principal,
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    FeaturesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}