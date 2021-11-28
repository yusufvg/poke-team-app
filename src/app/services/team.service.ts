import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../Pokemon';
import { TEAM } from '../mock-team';
import { TYPES } from '../Types';
import { Matchup } from '../Matchup';
import { Report } from '../Report';

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
    this.team.map((mon) => (teamTypes = teamTypes.concat(mon.types)));
    teamTypes = [...new Set(teamTypes)];

    let report: Report = {
      offense: [],
      defense: [],
    };

    teamTypes.forEach((type) => {
      let typeMatch = TYPES.find((t) => t.type === type);

      typeMatch?.offense.map((o) => {
        if (
          o.effect === 2 &&
          !report.offense.find((t) => t.target === o.target)
        ) {
          report.offense.push(o);
        }
      });
      typeMatch?.defense.map((o) => {
        if (
          o.effect === 2 &&
          !report.defense.find((t) => t.target === o.target)
        ) {
          report.defense.push(o);
        }
      });
    });

    return of(report);
  }
}
