import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private router: Router) {}

  public initForm() {
    this.searchForm = new FormGroup({
      anime: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm() {
    let searchTerm = this.searchForm.get('anime')?.value;
    this.router.navigate(['/animes', searchTerm]);
  }
}
