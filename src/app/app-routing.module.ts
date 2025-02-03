import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LoginComponent } from './login/login.component';
import { AmpliencePageComponent } from './amplience-page/amplience-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'form', component: HeroFormComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'amplience', component: AmpliencePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
