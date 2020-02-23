import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserService } from './service/user.service';
import './http-client.ts/http-request';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    HomeModule,
    LoginModule

  ],
  providers: [UserService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
