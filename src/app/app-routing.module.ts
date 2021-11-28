import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoveragePanelComponent } from './components/coverage-panel/coverage-panel.component';
import { EditTeamPanelComponent } from './components/edit-team-panel/edit-team-panel.component';

const routes: Routes = [
  { path: '', component: CoveragePanelComponent },
  { path: 'edit', component: EditTeamPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
