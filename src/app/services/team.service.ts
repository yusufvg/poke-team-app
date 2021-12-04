import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../interfaces/Pokemon';
import { TEAM } from '../mock-team';
import { TYPES } from '../Types';
import { Report } from '../interfaces/Report';
import { Matchup } from '../interfaces/Matchup';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  team: Pokemon[] = TEAM;

  constructor() {}

  getTeam(): Observable<Pokemon[]> {
    return of(this.team);
  }

  deleteMon(mon: Pokemon): Observable<Pokemon[]> {
    this.team = this.team.filter((p) => p.name !== mon.name);
    return of(this.team);
  }

  getTeamReport(): Observable<any> {
    // grab type coverage of current team
    let teamTypes: String[] = [];
    this.team.forEach((mon) => (teamTypes = teamTypes.concat(mon.types)));

    let report: Report = {
      offense: [],
      defense: [],
    };

    // offensive coverage
    this.team.forEach((mon) =>
      mon.moveset.forEach((move) => {
        this.mapTypeToReport(move.type, report.offense, true);
      })
    );

    // defensive coverage
    teamTypes.forEach((type) => {
      this.mapTypeToReport(type, report.defense, false);
    });

    console.log(TYPES);

    return of(report);
  }

  private mapTypeToReport(
    type: String,
    list: Matchup[],
    isOffense: boolean
  ): void {
    let typeMatch = Object.assign(
      TYPES.find((t) => t.type === type),
      {}
    );
    let from = isOffense ? typeMatch?.offense : typeMatch?.defense;

    from?.forEach((o) => {
      if (o.effect === 2) {
        let matchup;
        if ((matchup = list.find((t) => t.target === o.target))) {
          matchup.occurences = (matchup.occurences ?? 1) + 1;
        } else {
          list.push({ target: o.target, effect: o.effect });
        }
      }
    });

    list.sort((a, b) => (b.occurences ?? 1) - (a.occurences ?? 1));
  }
}
