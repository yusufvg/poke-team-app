import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Pokemon } from 'src/app/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() mon!: Pokemon;
  @Output() onRemoveMon: EventEmitter<Pokemon> = new EventEmitter();
  edit!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.edit = value));
  }

  ngOnInit(): void {}

  onRemove(mon: Pokemon) {
    this.onRemoveMon.emit(mon);
  }
}
