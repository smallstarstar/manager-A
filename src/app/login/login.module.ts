import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  // 组件部分
  declarations: [LoginComponent],

  // 模块部分
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
