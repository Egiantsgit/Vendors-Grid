import {EventEmitter, Output,Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import{AppService} from '../app.service';
import{MyGridApplicationComponent} from "../my-grid-application/my-grid-application.component";
import{VendorService} from "./vendor.service";
//import {Moda } from 'ngx-bootstrap';

@Component({
    selector: 'vendor-update',
    templateUrl: 'vendorUpdate.component.html',
})
export class VendorUpdateComponent implements OnInit{
    form:FormGroup;
    vendorId: any;
    company:any;
    phone:any;
    location:any;
    title:any;
    submittedStatus:any;
    client:any;
    submittedBy:any;
    submittedDate:any;
    vendorDet:any[];
    vendorName: String;
    vendorDetails:any;
    modalflag:any;
    private vendordata={};
    constructor(private appService:AppService, private myGrid:MyGridApplicationComponent,private vendorService:VendorService,private router:Router,
      private formBuilder:FormBuilder){
        console.log("in constructor");
        
    }
    
    numberFieldValidator(control:FormControl) {
      if (control.value.match(/^\d{10}$/) ){
         return null;
      } else {
          return { 'invalidNumberField': true };
      }

     
 }
 dateFieldValidator(control:FormControl) {
  if (control.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/) ){
     return null;
  } else {
      return { 'invalidDateField': true };
  }

 
}
    ngOnInit(){
      this.form =    this.formBuilder.group({
        vendorName: ['',[Validators.required]],
        company:['',[Validators.required]],
        phone:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),this.numberFieldValidator])],
        location:['',[Validators.required]],
        title:['',[Validators.required]],
        submittedStatus:['',[Validators.required]],
        client:['',[Validators.required]],
        submittedBy:['',[Validators.required]],
        submittedDate:['',Validators.compose([Validators.required,this.dateFieldValidator])],


    })

    }
    ngOnChanges(){

    }


// setVendorDetails(vendors){
        
//     console.log("in setter");
//     this.vendorDet= vendors;
//     console.log("Setter: "+this.vendorDet[0].personName)
//     this.vendorName=this.vendorDet[0].pesonName;
// }

// getVendors(){
//     console.log("Getter: "+this.vendorDet)
//         return  this.vendorDet;
        

//}
  getVendorDetails(){


    //this.vendorDet =localStorage.getItem('vendors');
    this.vendorDet=this.myGrid.getRowData();
     console.log("Hello Vendor "+this.vendorDet);
     console.log("Details: "+this.vendorDet[0].vendor_id);
    this.vendorName=this.vendorDet[0].personName;
     this.company=this.vendorDet[0].vendorCompanyName;
     this.location=this.vendorDet[0].position_location;
     this.phone=this.vendorDet[0].phone;
     this.client=this.vendorDet[0].client;
     this.submittedStatus=this.vendorDet[0].submitted_status;
     this.submittedBy=this.vendorDet[0].submitted_by;
     this.submittedDate=this.vendorDet[0].submitted_date;
     this.title=this.vendorDet[0].position_title;
    
    //  $('#').dialog("close").
     console.log( this.vendorName);
     return true;
  }

  onSubmit(f:NgForm){
    this.modalflag="modal";
    event.preventDefault();
    console.log("VendorName "+f.value.vendorName+" "+this.vendorDet[0].vendor_id);
    var updateVendor=
    {
      vendor_id :this.vendorDet[0].vendor_id,
      vendorCompanyName: f.value.company,
      personName:f.value.vendorName,
      phone:f.value.phone,
      position_location:f.value.location,
      position_title:f.value.title,
      submitted_status:f.value.submittedStatus,
      submitted_by:f.value.submittedBy,
      submitted_date:f.value.submittedDate,
      client:f.value.client


    }
    this.vendorService.setData("vendor_id",updateVendor.vendor_id);
    this.vendorService.setData("vendorCompanyName",updateVendor.vendorCompanyName);
    this.vendorService.setData("personName",updateVendor.personName);
    this.vendorService.setData("position_location",updateVendor.position_location);
    this.vendorService.setData("position_title",updateVendor.position_title);
    this.vendorService.setData("submitted_status",updateVendor.submitted_status);
    this.vendorService.setData("submitted_by",updateVendor.submitted_by);
    this.vendorService.setData("submitted_date",updateVendor.submitted_date);
    this.vendorService.setData("phone",updateVendor.phone);
    this.vendorService.setData("client",updateVendor.client)
    this.vendordata=this.vendorService.getData();

    this.vendorService.postData(this.vendordata).subscribe(result =>{
        console.log(result);
        this.myGrid.updateRowData();
        //this.router.navigate(['']);
      },
      error =>{
        alert('This is a problem with the enrollment');
      }
      )



  }
   

   
}