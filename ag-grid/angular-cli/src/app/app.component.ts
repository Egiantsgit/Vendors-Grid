import { Component } from '@angular/core';
import{AppService} from './app.service';
import{VendorUpdateComponent} from './vendorUpdate/vendorUpdate.component';
import{VendorService} from './vendorUpdate/vendor.service';
import{AddVendorService} from './vendorAdd/vendorAdd.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService,VendorUpdateComponent,VendorService,AddVendorService]
})

export class AppComponent {
  signUpVisibilityFlag:boolean=true;
  patientInfo:any;
  constructor(){
    localStorage.clear();
  }

  signUpdissapear(){
    console.log("login before :"+this.signUpVisibilityFlag)
     this.signUpVisibilityFlag = JSON.parse(localStorage.getItem('signUpFlag'));
     this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'))
    console.log("login "+this.signUpVisibilityFlag)
}
logout(){
  localStorage.clear();
  this.signUpVisibilityFlag=true;
  this.patientInfo='';
}
}
