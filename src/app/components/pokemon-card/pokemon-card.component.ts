import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/Pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() mon!: Pokemon;
  @Output() onRemoveMon: EventEmitter<Pokemon> = new EventEmitter();
  subscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRemove(mon: Pokemon) {
    this.onRemoveMon.emit(mon);
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }
}
