import { Component, OnInit } from '@angular/core';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  all_Data: any;
  textlength: number = 150;
  showMore: boolean;
  constructor(private locastorser: LocalstoragedataService) {
    this.showMore = false;
  }

  ngOnInit(): void {
    this.locastorser.getdatafromapi();
    const timer: any = setTimeout(() => {

      this.all_Data = this.locastorser.getdtafrmlocalstor();





    }, 500);

  }
  delete(i: any) {
    this.locastorser.deleteblog(i, this.all_Data)

  }

}
