import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {


  id: any
  blog: any
  constructor(private activeRoute: ActivatedRoute, private localser: LocalstoragedataService) {

  }

  ngOnInit(): void {
    let datadet = this.localser.getdtafrmlocalstor()
    this.id = this.activeRoute.snapshot.params['id'];
    this.blog = this.localser.specific(this.id)
    console.log(this.blog);


  }
}
