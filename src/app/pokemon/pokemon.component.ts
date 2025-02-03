import {
  Component,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ApiService } from '../services/poke.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
  standalone: false,
})
export class PokemonComponent implements OnInit {
  customTrainer: WritableSignal<string> = signal('');

  trainers: Signal<any[]>;
  trainer: Signal<any>;

  constructor(private readonly apiService: ApiService) {
    this.trainers = this.apiService.trainersSignal;
    this.trainer = this.apiService.trainerSignal;
  }

  ngOnInit(): void {
    this.apiService.fetchTrainers();
    this.apiService.fetchTrainer('c882e527-bcd6-4b00-b74d-7d1bf8df59f6');
  }

  createTrainer(): void {
    this.apiService.createTrainer({ name: this.customTrainer(), pokemons: [] });
    this.apiService.fetchTrainers();
  }

  onInput(query: string) {
    this.customTrainer.set(query);
  }
}
