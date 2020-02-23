import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  // 组件部分
  declarations: [LoginComponent],

  // 模块部分
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule, // 可编程表单模块
    BrowserAnimationsModule // 控制验证动画
  ]
})
export class LoginModule { }
