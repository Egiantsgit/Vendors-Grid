import {EventEmitter, Output,Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms';
import{AppService} from '../app.service';
import{MyGridApplicationComponent} from "../my-grid-application/my-grid-application.component";


@Component({
    selector: 'vendor-delete',
    templateUrl: './vendorDelete.component.html',
})
export class VendorDeleteComponent{

    vendorData:any[];
    constructor(private appService:AppService, private myGrid:MyGridApplicationComponent,private router:Router){
        console.log("In Delete Vendor");
    }
    deleteRow(){

        this.vendorData=this.myGrid.getRowData();
        console.log(this.vendorData);
        console.log("vendor_Id: "+this.vendorData[0].vendor_id);
        this.appService.deleteById(this.vendorData[0].vendor_id).
        subscribe(result =>{
            //console.log("result);
            this.myGrid.updateRowData();
            //this.router.navigate(['grid']);
          }
          )
    }


}