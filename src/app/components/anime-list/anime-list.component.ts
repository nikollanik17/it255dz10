import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes: any[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchAnimes();
  }

  fetchAnimes() {
    let searchTerm = this.route.snapshot.paramMap.get('term');

    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}`)
      .then((res) => {
        if (res.data.results) {
          this.animes = res.data.results;
        }
      });
  }
}
