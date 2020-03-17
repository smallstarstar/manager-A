import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userServices: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // 获取用户信息
    const data = this.userServices.getUserInfo();
    console.log(data);
    this.router.navigate(['/home/home/person'])
  }

}
