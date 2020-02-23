import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public userInfo = {};
  // 储存用户信息
  public saveUserInfo(userInfo: any) {
    this.userInfo = userInfo;
  }
  // 获取用户信息
  public getUserInfo() {
    let userInfo = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(userInfo);
    return this.userInfo;
  }
  // 发布订阅模式
  private publishSome: Subject<any> = new Subject<any>();

  public setPublish(some: any): void {
    this.publishSome.next(some);
  }

  public getSub(): Observable<any> {
    return this.publishSome.asObservable();
  }
  //发布
  // this._hisCurveAddService.setSelectedPoint(arg）
  //   //订阅
  // this._hisCurveAddService.currentSelectedPoint().subscribe((value: any) => { console.log(value) });

}
