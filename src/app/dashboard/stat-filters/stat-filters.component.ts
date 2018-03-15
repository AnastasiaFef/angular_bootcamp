import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'abc-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {

  search: FormGroup;

  constructor(fb: FormBuilder) {
    this.search = fb.group({
      searchInput: ['', Validators.required] //single validator
    })
   }

   saveEmployeeDetails(): void {
    console.log('Form Submitted', this.search.value);
  }


  ngOnInit() {
  }

}
