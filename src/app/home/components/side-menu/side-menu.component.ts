import { Component, OnInit } from '@angular/core';
import RouterConfigName from '../../../common/router-config';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  private routerList: any[] = RouterConfigName.routers;
  constructor() { }

  ngOnInit() {
  }

}
