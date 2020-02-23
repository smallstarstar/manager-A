import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userServices: UserService
  ) { }

  ngOnInit() {
    // 获取用户信息
    const data = this.userServices.getUserInfo();
    console.log(data);
  }

}
