import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {TaskService} from './services/task.service';
 import {AppService} from './../app.service';
 import { Router } from '@angular/router';
 import{AppComponent} from './../app.component';

@Component({

  selector: 'profileUpdate',
  templateUrl: 'profileUpdate.component.html'
})
export class ProfileUpdateComponent{

patientprofile:any;
firstname:any;

constructor(){
  this.patientprofile = JSON.parse(localStorage.getItem('patientDetails'))
this.firstname = this.patientprofile.firstname;

}

}