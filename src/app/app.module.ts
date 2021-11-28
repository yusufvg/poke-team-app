import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoveragePanelComponent } from './components/coverage-panel/coverage-panel.component';
import { EditTeamPanelComponent } from './components/edit-team-panel/edit-team-panel.component';
import { TeamComponent } from './components/team/team.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoveragePanelComponent,
    EditTeamPanelComponent,
    TeamComponent,
    PokemonCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
