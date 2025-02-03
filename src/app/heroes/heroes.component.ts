import { Component, WritableSignal } from '@angular/core';
import { HEROES, HEROES_SIGNAL } from '../mock/mock-heroes';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: false,
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: WritableSignal<Hero[]> = HEROES_SIGNAL;

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.heroes = HEROES_SIGNAL;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroes.update((heroes) => [
      ...heroes,
      { id: heroes.length + 1, name },
    ]);
    // this.heroService.addHero({ name } as Hero).subscribe((hero) => {
    //   this.heroes.push(hero);
    // });
  }

  delete(hero: Hero): void {
    this.heroes.update((heroes) => heroes.filter((h) => h !== hero));
    // this.heroes = this.heroes.filter((h) => h !== hero);
    // this.heroService.deleteHero(hero.id).subscribe();
  }
}
