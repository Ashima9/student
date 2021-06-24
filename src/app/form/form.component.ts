import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { Student } from '../student';
import { Family } from '../family';
import { Address } from '../address';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolinfoService } from '../schoolinfo.service';
import { Reservation } from '../reservation';
import { Medium } from '../medium';
import { PastSchool } from '../past-school';
import { Bank } from '../bank';
import { Other } from '../other';
import { MasterData } from '../master-data';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public school: boolean = true;
  public student: boolean = false;
  public family : boolean = false;
  public address : boolean = false;
  public reservation : boolean = false;
  public medium : boolean = false;
  public past : boolean = false;
  public bank : boolean = false;
  public other : boolean = false;
  public show : boolean = false;
  public hide : boolean = false;
  
  // sch: School = new School;
  sch= new School();
  
  stu : Student = new Student;
  // stu = new Student();
  // fmly = new Family();
  fmly : Family = new Family;
  // add = new Address();
  add : Address = new Address;
  // res = new Reservation();
  res : Reservation = new Reservation;
  // med = new Medium();
  med : Medium = new Medium;
  // pst = new PastSchool();
  pst : PastSchool = new PastSchool;
  // bnk = new Bank();
  bnk : Bank = new Bank;
  // otherinfo = new Other();
  otherinfo : Other = new Other;
  data : MasterData;
  constructor(public router: Router , public form : FormsModule, private ser : SchoolinfoService ) {
    this.data = new MasterData();
  }
 route(){
   
  console.log(this.data);
  this.ser.setData(this.data);
  this.router.navigate(['/display']);
 
  // console.log(this.sch);
  // console.log(this.stu);
  // console.log(this.fmly);
  // console.log(this.add);
  // console.log(this.res);
  // console.log(this.med);
  // console.log(this.pst);
  // console.log(this.bnk);
  // console.log(this.otherinfo);

  // localStorage.setItem("formschool", JSON.stringify(this.sch));
  // localStorage.setItem("formstudent",JSON.stringify(this.stu));
  // localStorage.setItem("formfamily" , JSON.stringify(this.fmly));
  // localStorage.setItem("formaddress", JSON.stringify(this.add));
  // localStorage.setItem("formreservation", JSON.stringify(this.res));
  // localStorage.setItem("formmedium", JSON.stringify(this.med));
  // localStorage.setItem("formpast", JSON.stringify(this.pst));
  // localStorage.setItem("formbank", JSON.stringify(this.bnk));
  // localStorage.setItem("formother", JSON.stringify(this.otherinfo));

 }

  ngOnInit(){
   
   this.ser.clear();
  

  }
  Class(){
    if(this.data.student.class == "Class 11" || this.data.student.class =="Class 12"){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }
  SameAddress(){
    if(this.data.address.same == "No"){
      this.hide= true;
    }
    else{
      this.hide= false;
    }
  }
  School() {
    console.log(this.data);
    window.scrollTo(0,0);
    this.school = true;
    this.student = false;
    this.family = false;
    this.reservation= false;
    this.address = false;
    this.medium = false;
    this.past = false;
    this.bank= false;
    this.other= false;
  }
  Student() {
    console.log(this.data);
    window.scrollTo(0,0);
    this.student = true;
    this.school = false;
    this.family = false;
    this.reservation= false;
    this.address = false;
    this.medium = false;
    this.past = false;
    this.bank= false;
    this.other= false;
  }
  Family(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.family= true;
    this.school = false;
    this.student= false;
    this.reservation= false;
    this.address = false;
    this.medium = false;
    this.past = false;
    this.bank= false;
    this.other= false;
  }
  Address(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.address= true;
    this.student = false;
    this.family = false;
    this.school= false;
    this.reservation= false;
    this.medium = false;
    this.past = false;
    this.bank= false;
    this.other= false;
  }
  Reservation(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.reservation=true;
    this.address= false;
    this.student = false;
    this.family = false;
    this.school= false;
    this.medium = false;
    this.past = false;
    this.bank= false;
    this.other= false;
  }
  Medium(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.reservation=false;
    this.address= false;
    this.student = false;
    this.family = false;
    this.school= false;
    this.medium= true;
    this.past = false;
    this.bank= false;
    this.other= false;
  }
  Past(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.reservation=false;
    this.address= false;
    this.student = false;
    this.family = false;
    this.school= false;
    this.medium= false;
    this.past= true;
    this.bank= false;
    this.other= false;
  }
  Bank(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.reservation=false;
    this.address= false;
    this.student = false;
    this.family = false;
    this.school= false;
    this.medium= false;
    this.past= false;
    this.bank= true;
    this.other=false;
  }

  Other(){
    console.log(this.data);
    window.scrollTo(0,0);
    this.reservation=false;
    this.address= false;
    this.student = false;
    this.family = false;
    this.school= false;
    this.medium= false;
    this.past= false;
    this.bank= false;
    this.other = true;
  }

  finalButton(){
    console.log(this.data);
    this.ser.setData(this.data);
    this.router.navigate(['/display']);
  }

}
