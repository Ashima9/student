import { Component, OnInit, Input, PipeTransform } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { MasterData } from '../master-data';
import { SchoolinfoService } from '../schoolinfo.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})


export class DisplayComponent implements OnInit {

  data : MasterData;
  
  constructor(public schoolinfo : SchoolinfoService, private route: ActivatedRoute ,public router: Router) {
    this.data = new MasterData();
    
   }
  
   remove(){
     
   }

  ngOnInit() {
    console.log(this.schoolinfo.getData());
    this.data = this.schoolinfo.getData();
    
//     this.route.paramMap.subscribe(params => {
//       this.dat = params.get("carBrand")
//     })
// console.log(this.dat);
//     this.x = localStorage.getItem("formschool");
//    this.view = JSON.parse(this.x);
   
//    this.y = localStorage.getItem("formstudent");
//    this.stu = JSON.parse(this.y);
   
//     this.z = localStorage.getItem("formfamily");
//     this.fmly = JSON.parse(this.z);

//     this.a = localStorage.getItem("formaddress");
//     this.add = JSON.parse(this.a);

//     this.b = localStorage.getItem("formreservation");
//     this.res = JSON.parse(this.b);

//     this.c = localStorage.getItem("formmedium");
//     this.med = JSON.parse(this.c);

//     this.d = localStorage.getItem("formpast");
//     this.pst = JSON.parse(this.d);

//     this.e = localStorage.getItem("formbank");
//     this.bnk = JSON.parse(this.e);

//     this.f = localStorage.getItem("formother");
//     this.info = JSON.parse(this.f);


  }
 

}
