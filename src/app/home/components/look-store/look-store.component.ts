import { Component, OnInit } from '@angular/core';
import { axiosSerices } from '../../../service/axios.services';
import { PageBean } from 'src/app/models/page-bean';
import TimeFormat from '../../../utils/time-format';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-look-store',
  templateUrl: './look-store.component.html',
  styleUrls: ['./look-store.component.scss']
})
export class LookStoreComponent implements OnInit {
  private pageBean: PageBean = new PageBean();
  private listOfAllData: any[] = [];
  private timeFormat: any = TimeFormat;
  private username: string = '';
  constructor(
    private messageService: NzMessageService,
    private userService: UserService,
    private modal: NzModalService
  ) { }
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  userInfo: any = this.userService.getUserInfo();
  currentPageDataChange($event: any[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    console.log(this.listOfDisplayData, '数据全选')
    this.refreshStatus();
  }
  deleteStoreInfo(e: any) {
    this.modal.confirm({
      nzTitle: '确定删除?',
      nzOkText: '删除',
      nzOkType: 'danger',
      nzOnOk: async () => {
        let data = await axiosSerices.deleteStoreInfoById(e, this.userInfo.personId);
        if (data) {
          this.messageService.create('success', '删除成功');
          this.getInit();
        }
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  updataStoreInfo() { }
  async getInit() {
    let data: any = await axiosSerices.storeInfoMessageByPageAndSize(this.pageBean);
    this.listOfAllData = data.list;
  }
  ngOnInit() {
    this.getInit();
  }

}
