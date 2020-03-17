import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/models/store-info';
import { UserService } from 'src/app/service/user.service';
import { axiosSerices } from 'src/app/service/axios.services';
import { NzMessageService } from 'ng-zorro-antd';
import * as rxEvent from 'pubsub-js';
import EventKeys from '../../../core/event-keys';


@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent implements OnInit {
  constructor(
    private userService: UserService,
    private messageService: NzMessageService
  ) { }
  private storeInfo: any = {};
  userInfo: any = this.userService.getUserInfo();
  listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

  async submit() {
    let storeInfo: StoreInfo = new StoreInfo();
    storeInfo.cTime = (new Date()).getTime();
    storeInfo.count = this.storeInfo.count;
    storeInfo.name = this.storeInfo.name;
    storeInfo.type = this.storeInfo.type;
    storeInfo.subtype = this.storeInfo.subtype;
    storeInfo.place = this.storeInfo.place;
    storeInfo.person = this.userInfo.personName;
    storeInfo.personId = this.userInfo.personId;
    storeInfo.remark = this.storeInfo.remark;
    let data: any = await axiosSerices.saveStoreInfo(storeInfo);
    if (data === true) {
      this.messageService.create('success', '添加成功');
      this.storeInfo = {};
      // 通知组件刷新
      rxEvent.publish(EventKeys.REFRESH_DATA, true);
    } else {
      this.messageService.create('error', '参数错误');
    }
  }
  cancle() {
    this.storeInfo = {};
  }
  ngOnInit() {
  }

}
