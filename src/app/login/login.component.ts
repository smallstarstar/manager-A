import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { axiosSerices } from '../service/axios.services';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userServices: UserService,
    private messageService: NzMessageService) { }
  private showComponent: Boolean = false;
  private isOpacity: Boolean = false;
  validateForm: FormGroup;
  async submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status === 'INVALID') {
      return
    } else {
      const result: any = await axiosSerices.userLogin(this.validateForm.value.userName, this.validateForm.value.password);
      if (result.status !== 400) {
        localStorage.setItem('userInfo', JSON.stringify(result));
        this.userServices.saveUserInfo(result);
        this.showComponent = true;
        this.isOpacity = true;
        this.messageService.create('success', '登录成功')
        setTimeout(() => {
          this.router.navigate(['home/home/person']);
        }, 3000)
      } else {
        this.messageService.create('error', result.data.message);
      }
    }
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo) {
      this.router.navigate(['home/home/person']);
    }
  }
}
