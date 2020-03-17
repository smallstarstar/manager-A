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
import { LookStoreComponent } from './components/look-store/look-store.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    SideMenuComponent,
    HeaderTopComponent,
    UserInfoComponent,
    LookStoreComponent,
    AddStoreComponent,
    TimeSheetComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
