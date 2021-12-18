import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes: any[];
  public searchForm: FormGroup;
  constructor() {}

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

    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
      .then((res) => {
        if (res.data.results) {
          this.animes = res.data.results;
        }
      });
  }
}
