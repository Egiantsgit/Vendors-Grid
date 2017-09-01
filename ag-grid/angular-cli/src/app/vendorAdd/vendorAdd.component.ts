import {EventEmitter, Output,Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import{AppService} from '../app.service';
import{MyGridApplicationComponent} from "../my-grid-application/my-grid-application.component";
import{AddVendorService} from "./vendorAdd.service";
//import {Moda } from 'ngx-bootstrap';

@Component({
    selector: 'vendor-add',
    templateUrl: './vendorAdd.component.html',
})
export class AddVendorComponent implements OnInit
{

    form :FormGroup;
    vendorId: any;
    company:any;
    phone:any;
    location:any;
    title:any;
    submittedStatus:any;
    client:any;
    submittedBy:any;
    submittedDate:any;
    vendorName: String;
    vendorData:{};
    constructor(private appService:AppService, private myGrid:MyGridApplicationComponent,private vendorService:AddVendorService,private router:Router,
        private formBuilder:FormBuilder){
            console.log("In Add Vendor");
    }
//     numberFieldValidator(control:FormControl) {
//         if (control.value.match(/^\d{10}$/) ){
//            return null;
//         } else {
//             return { 'invalidNumberField': true };
//         }
  
       
//    }
//    dateFieldValidator(control:FormControl) {
//     if (control.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/) ){
//        return null;
//     } else {
//         return { 'invalidDateField': true };
//     }
  
   
//   }
  ngOnInit(){
    this.form =    this.formBuilder.group({
      vendorName: ['',[Validators.required]],
      company:['',[Validators.required]],
      phone:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
      location:['',[Validators.required]],
      title:['',[Validators.required]],
      submittedStatus:['',[Validators.required]],
      client:['',[Validators.required]],
      submittedBy:['',[Validators.required]],
      submittedDate:['',Validators.compose([Validators.required])],


  })

  }
  onPost(f:NgForm){
      console.log("Hello");
    
    event.preventDefault();
    //console.log("VendorName "+f.value.vendorName+" "+this.vendorDet[0].vendor_id);
    var updateVendor=
    {
      //vendor_id :this.vendorDet[0].vendor_id,
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
    //this.vendorService.setData("vendor_id",updateVendor.vendor_id);
    this.vendorService.setData("vendorCompanyName",updateVendor.vendorCompanyName);
    this.vendorService.setData("personName",updateVendor.personName);
    this.vendorService.setData("position_location",updateVendor.position_location);
    this.vendorService.setData("position_title",updateVendor.position_title);
    this.vendorService.setData("submitted_status",updateVendor.submitted_status);
    this.vendorService.setData("submitted_by",updateVendor.submitted_by);
    this.vendorService.setData("submitted_date",updateVendor.submitted_date);
    this.vendorService.setData("phone",updateVendor.phone);
    this.vendorService.setData("client",updateVendor.client)
    this.vendorData=this.vendorService.getData();

    this.vendorService.postData(this.vendorData).subscribe(result =>{
        console.log(result);
        this.myGrid.updateRowData();
        //this.router.navigate(['grid']);
      },
      error =>{
        alert('This is a problem with the enrollment');
      }
      )



  }




}