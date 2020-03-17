import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { axiosSerices } from 'src/app/service/axios.services';
import { UserService } from 'src/app/service/user.service';
import TimeSheetKeys from '../time-sheet/time-sheet-keys';
import TimeFormat from '../../../utils/time-format';
import * as rxEvent from 'pubsub-js';
import EventKeys from '../../../core/event-keys';



@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
  @ViewChild('scrollMe', { static: true }) private myScrollContainer: ElementRef;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }
  private userInfo: any = this.userService.getUserInfo();
  private timeSheetList: any = [];
  private timeFormat: any = TimeFormat;
  private count: number = 0;
  
  // 获取元数据
  async getInit() {
    let data: any = await axiosSerices.getTimeSheetListInfo(this.userInfo.personId);
    data.forEach((e: any) => {
      e.messageKey = TimeSheetKeys[e.messageKey]
    });
    this.timeSheetList = data;
    this.scrollToBottom();
  }
  // 滚动底部
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  async ngOnInit() {
    await this.getInit();
    rxEvent.subscribe(EventKeys.REFRESH_DATA, ((name: any, val: any) => {
      this.getInit();
    }))
  }

}
