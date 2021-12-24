import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './components/anime/anime.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [AppComponent, AnimeComponent, AnimeListComponent, SearchFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
