import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() mon!: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
