import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children:[
            {
                path:'person',
                component:UserInfoComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }