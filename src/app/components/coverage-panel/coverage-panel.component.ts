import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Matchup } from 'src/app/interfaces/Matchup';
import { Report } from 'src/app/interfaces/Report';
import { TeamService } from 'src/app/services/team.service';

interface OccList {
  occ: number;
  list: Matchup[];
  color?: string;
}

@Component({
  selector: 'app-coverage-panel',
  templateUrl: './coverage-panel.component.html',
  styleUrls: ['./coverage-panel.component.css'],
})
export class CoveragePanelComponent implements OnInit {
  report!: Report;
  offense: OccList[] = [];
  defense: OccList[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeamReport().subscribe((r) => (this.report = r));

    this.mapOccurences(this.report.offense, this.offense);
    this.mapOccurences(this.report.defense, this.defense);
  }

  mapOccurences(source: Matchup[], target: OccList[]): void {
    source.map((m) => {
      let countMatch = target.find((o) => o.occ == (m.occurences ?? 1));
      if (countMatch) {
        countMatch.list.push(m);
      } else {
        target.push({ occ: m.occurences ?? 1, list: [m] });
      }
    });

    if (target.length > 1) {
      let inc = (255 - 120) / (target.length - 1);
      let [r, g, b] = [120, 0, 0];

      target.forEach((o) => {
        o.color = 'rgb(' + r + ',' + g + ',' + b + ')';
        [r, g, b] = [r + inc, g + inc, b + inc];
      });
    } else {
      target[0].color = 'rgb(255,135,135)';
    }
  }
}
