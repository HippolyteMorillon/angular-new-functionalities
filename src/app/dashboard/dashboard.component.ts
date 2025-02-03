import { Component, OnInit, WritableSignal } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../interfaces/hero';
import { HEROES, HEROES_SIGNAL } from '../mock/mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  heroes: WritableSignal<Hero[]> = HEROES_SIGNAL;

  constructor(private heroService: HeroService) {}

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
