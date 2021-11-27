import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragedataService {
  sortarr: any;
  editaction = -1;
  constructor(private apiser: ApiService) {
    this.sortarr = [];
  }

  getdatafromapi() {
    this.apiser.getalldata().subscribe(data => {
      let exisdata = localStorage.getItem("data")
      if (exisdata == null) {
        data.articles.sort((x: any) => {
          const a = new Date(x.publishedAt)
          const b = new Date()
          return a === b ? 0 : a > b ? 1 : -1;


        })
        console.log(data.articles);
        localStorage.setItem("data", JSON.stringify(data.articles));
        console.log("hi");
      }

    });
  }

  getdtafrmlocalstor() {
    let dataAsstring = localStorage.getItem("data");
    if (dataAsstring == null) {
      return
    }
    let dataAsarray = JSON.parse(dataAsstring);
    return dataAsarray;


  }
  deleteblog(i: number, all_Data: any) {

    all_Data.splice(i, 1);
    localStorage.setItem("data", JSON.stringify(all_Data));
    alert("blog Deleted")
  }
  specific(index: any) {
    let dataAsstring = localStorage.getItem("data");
    if (dataAsstring == null) {
      return
    }
    let dataAsarray = JSON.parse(dataAsstring);

    return dataAsarray[index];
  }
  editdata(i: any) {
    if (i >= 0) {
      this.editaction = i;


    }


  }

}
