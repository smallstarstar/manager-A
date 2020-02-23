import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NzIconModule } from 'ng-zorro-antd/icon'; 
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SideMenuComponent,
    HeaderTopComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
