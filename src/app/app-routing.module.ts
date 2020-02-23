import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/router.guard';

const routes: Routes = [
  {
    path: ' ', 
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
