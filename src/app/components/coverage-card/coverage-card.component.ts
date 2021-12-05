import { Component, OnInit, Input } from '@angular/core';
import { Matchup } from 'src/app/interfaces/Matchup';
import { TYPES } from 'src/app/Types';

@Component({
  selector: 'app-coverage-card',
  templateUrl: './coverage-card.component.html',
  styleUrls: ['./coverage-card.component.css'],
})
export class CoverageCardComponent implements OnInit {
  @Input() matchup!: Matchup;
  color: string = '#000';
  type: string = '';
  occ: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.matchup);
    this.color =
      TYPES.find((t) => t.type == this.matchup.target)?.color ?? this.color;

    this.type =
      this.matchup.target.charAt(0).toLocaleUpperCase() +
      this.matchup.target.slice(1);

    this.occ = this.matchup.occurences ?? 1;
  }
}
