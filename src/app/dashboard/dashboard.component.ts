import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../interfaces/hero';
import { HEROES, HEROES_SIGNAL } from '../mock/mock-heroes';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, RouterModule, HeroSearchComponent],
  standalone: true,
})
export class DashboardComponent implements OnInit {
  heroes: WritableSignal<Hero[]> = HEROES_SIGNAL;

  private herosService: HeroService = inject(HeroService);

  constructor() {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = HEROES_SIGNAL;
    // this.heroService
    //   .getHeroes()
    //   .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
