import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CollapseModule } from 'ngx-bootstrap';
import{AppRoutingModule} from './app.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import{VendorUpdateComponent} from "./vendorUpdate/vendorUpdate.component";
import{AddVendorComponent} from "./vendorAdd/vendorAdd.component";
import{VendorDeleteComponent} from "./vendorDelete/vendorDelete.component";
import{LoginComponent} from "./login/login.component";
import{ProfileUpdateComponent} from "./profileUpdate/profileUpdate.component";


@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        VendorUpdateComponent,
        AddVendorComponent,
        VendorDeleteComponent,
        LoginComponent,
        ProfileUpdateComponent
        
    ],
    imports: [
        HttpModule,
        BrowserModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        ),
        AlertModule.forRoot(),
        CollapseModule,
         AppRoutingModule,
        // //ModalModule,
        // BootstrapModalModule,
        Ng2Bs3ModalModule,
        ReactiveFormsModule,
        FormsModule,
        BsDropdownModule.forRoot()  

    ],
    providers: [],
    exports: [BsDropdownModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
