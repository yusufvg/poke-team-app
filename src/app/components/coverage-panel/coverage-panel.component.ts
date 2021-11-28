import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/Report';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-coverage-panel',
  templateUrl: './coverage-panel.component.html',
  styleUrls: ['./coverage-panel.component.css'],
})
export class CoveragePanelComponent implements OnInit {
  report!: Report;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeamReport().subscribe((r) => (this.report = r));
  }
}
