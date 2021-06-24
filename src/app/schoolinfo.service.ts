import { Injectable } from '@angular/core';
import { School } from './school';
import { HttpClientModule } from '@angular/common/http';
import { MasterData } from './master-data';

@Injectable({
  providedIn: 'root'
})
export class SchoolinfoService {
  data: MasterData;
  constructor() {
    this.data = new MasterData();
  }

  public setData(val: MasterData) {
    console.log(val);
    this.data = val;
  }
  public getData() {
    return this.data;
  }
  public clear(){
    this.data = {} as MasterData;
  //  return this.data;
  }

}
