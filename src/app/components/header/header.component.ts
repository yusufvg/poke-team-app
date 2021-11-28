import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private uiService: UiService) {}

  ngOnInit(): void {}

  hasRoute(route: String) {
    return this.router.url === route;
  }

  toggleEdit() {
    this.uiService.toggleEdit();
  }
}
