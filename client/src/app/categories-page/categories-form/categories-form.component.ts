import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  // @ViewChild('input') inputRef: ElementRef
    // form: FormGroup
  // form: FormGroup
  isNew = true

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   name: new FormControl(null, Validators.required)
    // })

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.isNew = false
      } else {

      }
    })
  }

  triggerClick(){
    // this.inputRef.nativeElement.click()
  }

    onSubmin() {

    }


}
