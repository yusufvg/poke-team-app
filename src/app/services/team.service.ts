import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../Pokemon';
import { TEAM } from '../mock-team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  team: Pokemon[] = TEAM;

  constructor() {}

  getTeam(): Observable<Pokemon[]> {
    return of(this.team);
  }
}
