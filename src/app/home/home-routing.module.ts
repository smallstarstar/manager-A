import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LookStoreComponent } from './components/look-store/look-store.component';
import { AddStoreComponent } from './components/add-store/add-store.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children:[
            {
                path:'person',
                component:UserInfoComponent
            },
            {
                path: 'lookStore',
                component: LookStoreComponent
            },
            {
                path: 'addStore',
                component: AddStoreComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }