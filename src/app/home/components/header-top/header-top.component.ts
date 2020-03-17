import { Component, OnInit } from '@angular/core';
import TimeFormat from '../../../utils/time-format';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  private timeService: any = TimeFormat;
  private time: any = '';
  private timer: any;
  constructor() {
    this.timer = setInterval(() => {
      this.time = this.timeService.nowTime()
    }, 1000)
  }

  ngOnInit() {
    this.time = this.timeService.nowTime();
  }
  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
