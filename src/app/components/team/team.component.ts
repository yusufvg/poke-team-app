import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Pokemon } from 'src/app/Pokemon';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  team?: Pokemon[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeam().subscribe((team) => (this.team = team));
  }

  removeMon(mon: Pokemon) {
    this.teamService.deleteMon(mon).subscribe((team) => (this.team = team));
  }
}
