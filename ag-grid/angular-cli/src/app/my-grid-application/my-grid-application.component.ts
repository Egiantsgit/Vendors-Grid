import {Component,OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";
import{AppService} from "../app.service";
import{VendorUpdateComponent} from "../vendorUpdate/vendorUpdate.component"

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent  {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any [];
    vendors:any;
    uflag:boolean;
    aflag:boolean;   
    vendorDetails:any[] 
    

    constructor(private appService:AppService,private router:Router) {
        console.log("in Grid ");
        this.gridOptions = <GridOptions>{};
        this.aflag=true;
        this.columnDefs = [
            {headerName: "VendorId", field: "vendor_id"},
            {headerName: "Vendor Company", field: "vendorCompanyName", cellRendererFramework: RedComponentComponent},
            {headerName: "Person Name", field: "personName"},
            {headerName: "Phone", field: "phone"},
            {headerName: "Postion Location", field: "position_location"},
            {headerName: "Position Title", field: "position_title"},
            {headerName: "Submitted Status", field: "submitted_status"},
            {headerName: "Client", field: "client"},
            {headerName: "Submitted By", field: "submitted_by"},
            {headerName: "Submited Date", field: "submitted_date"}

        ];
        this.appService.getAll().subscribe(vendors =>{
                //this.rowData= JSON.stringify(vendors);
                localStorage.setItem('vendordetails',JSON.stringify(vendors));
                    this.rowData= JSON.parse(localStorage.getItem('vendordetails'));
               console.log(this.rowData);
               
        })
        // this.rowData = [
        //     {make: "Toyota", model: "Celica", price: 35000},
        //     {make: "Ford", model: "Mondeo", price: 32000},
        //     {make: "Porsche", model: "Boxter", price: 72000}
        // ]
    }

    vendorUpdate(){
            this.router.navigate(['update']);
    }
setRowData(vendors){
    console.log("In grid Setter")
    this.vendorDetails=vendors;
}
getRowData(){
    console.log("In grid getter");
    return this.vendorDetails;
}

updateRowData(){
    this.appService.getAll().subscribe(vendors =>{
        //this.rowData= JSON.stringify(vendors);
        localStorage.setItem('updatedVendordetails',JSON.stringify(vendors));
         this.rowData= JSON.parse(localStorage.getItem('updatedVendordetails'));
         this.uflag=false;
       console.log(this.rowData);
       
})

}
    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.vendor_id);
        
        this.vendorDetails=this.gridOptions.api.getSelectedRows();  
        this.setRowData(this.vendorDetails);   
        console.log("Vendor Name :"+this.vendorDetails[0].personName);
        //this.vendorUpdate.setVendorDetails(this.vendorDetails);
        // localStorage.setItem('vendors',this.vendorDetails[0]);
         console.log("ianaks"+JSON.stringify(this.gridOptions.api.getSelectedRows()))
       // console.log("Hello"+selectedRows);
        //var rowNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        //console.log('getDisplayedRowAtIndex(0) => ' + nodeToString(rowNode));
      //  this.uflag=this.vendorUpdate.getVendorDetails();
      this.uflag=true;
    }
    private onSelectionChanged($event){
        //console.log("selection", event);
    }
    private onRowSelected($event) {

        //console.log('row'+JSON.stringify(this.gridOptions.api.getSelectedRows()))
        
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }
    
    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

