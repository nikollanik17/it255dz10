import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchFormComponent,
  },
  { path: 'animes/:term', component: AnimeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
