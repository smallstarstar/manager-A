import { Component, OnInit } from '@angular/core';
import { axiosSerices } from '../../../service/axios.services';
import { PageBean } from 'src/app/models/page-bean';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  private pageInfo: PageBean = new PageBean();
  private listOfAllData: any[] = [];
  private username: string = '';
  constructor() { }
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

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
  deleteuserInfo(e:any) {
    console.log(e);
  }

  async ngOnInit() {
    let data: any = await axiosSerices.getUserInfoByPageAndSize(this.pageInfo);
    this.listOfAllData = data.list;
  }

}
