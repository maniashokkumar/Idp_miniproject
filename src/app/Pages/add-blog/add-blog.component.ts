import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  editaction: any
  blogForm: any;
  stringtoarr: any = []
  constructor(private localstorageser: LocalstoragedataService, private route: Router) {
    this.blogForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'content': new FormControl(null, [Validators.required, Validators.minLength(150)]),
      'description': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'author': new FormControl(null, Validators.required),
      // 'urlToImage': new FormControl(null, Validators.required),
      'publishedAt': new FormControl(null, Validators.required),

    });
  }

  ngOnInit(): void {
    const currentDate = new Date().toISOString().substring(0, 19) + "Z";
    this.blogForm.controls['publishedAt'].setValue(currentDate);
    let existingdata = localStorage.getItem("data");
    if (existingdata == null) {
      return
    }

    this.stringtoarr = JSON.parse(existingdata);
    this.editaction = this.localstorageser.editaction
    console.log(this.editaction);
    if (this.editaction >= 0) {
      this.blogForm.patchValue(this.stringtoarr[this.editaction]);
    }

  }
  submit(data: any) {
    this.localstorageser.submitBlogEdit(data, this.stringtoarr);
    this.route.navigateByUrl("bloglists")
  }
}
