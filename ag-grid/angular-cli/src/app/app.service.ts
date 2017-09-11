import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class AppService{
    constructor(private http: Http){
        console.log('app service initialized');
    }

    getAll(){
        return this.http.get('http://localhost:9090/vendor/getAll')
        .map(res => res.json());
            }

    getbyId(vendor_id){
        return this.http.get('http://localhost:9090/vendor/getVendor?vendor_id='+vendor_id)
        .map(res => res.json());
    }
    deleteById(vendor_id){
        return this.http.get('http://localhost:9090/vendor/deleteVendor?vendor_id='+vendor_id)
        .map(res => res|| {result :'record deleted successfully'});
    }
    getApp(username,password){
        return this.http.get('http://localhost:9090/patient/login?username='+username+'&password='+password)
        .map(res => res.json());
            }
    getCompany(){
        return this.http.get('http://localhost:9090/vendor/getCompany')
        .map(res => res.json());
    }
    filterByCompany(company){
        return this.http.get('http://localhost:9090/vendor/filterCompany?filterValue='+company)
        .map(res => res.json());
    }
    searchByValue(searchValue)
    {
        return this.http.get('http://localhost:9090/vendor/search?searchValue='+searchValue)
        .map(res => res.json());
    }


    
}