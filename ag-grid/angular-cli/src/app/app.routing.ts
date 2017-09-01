import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MyGridApplicationComponent} from './my-grid-application/my-grid-application.component'
import{VendorUpdateComponent} from './vendorUpdate/vendorUpdate.component';
import{LoginComponent} from './login/login.component'
const routes: Routes = [
    
     {path:'grid', component:MyGridApplicationComponent},
     {path:'update',component:VendorUpdateComponent},
     {path:'login', component:LoginComponent}

    // { path: 'logout' , component: PatientComponent},
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule{

}