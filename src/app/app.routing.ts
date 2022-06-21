import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRoutingModule } from "./auth/auth.routing";

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full'  } // home principal,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}