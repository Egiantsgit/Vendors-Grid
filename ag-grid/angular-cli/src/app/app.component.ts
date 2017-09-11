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
  companies:String[];
  heading:any;
  constructor(private appService:AppService){
    localStorage.clear();
  }

  signUpdissapear(){
    console.log("login before :"+this.signUpVisibilityFlag)
     this.signUpVisibilityFlag = JSON.parse(localStorage.getItem('signUpFlag'));
     this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'))
    console.log("login "+this.signUpVisibilityFlag)
}

stop(event){
  console.log("In stop")

  console.log("dkdjds"+event.target.value);
  this.heading=event.target.value;

  if(event.target.value == "VendorCompany"){
    this.appService.getCompany().
    subscribe(dbCompanies=>{
       console.log(dbCompanies);
       this.companies= dbCompanies;
       console.log("Array"+this.companies)
    })
  }
        event.stopPropagation();
  

}
filter(event){
  
}
getCompany(event){
 
  
}
logout(){
  localStorage.clear();
  this.signUpVisibilityFlag=true;
  this.patientInfo='';
}
}
