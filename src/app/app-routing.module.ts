import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentryComponent } from './commentry/commentry.component';
import { AdminComponent } from './admin/admin.component';
import { NewMatchComponent } from './admin/new-match/new-match.component';
import { DefineTeamsComponent } from './admin/define-teams/define-teams.component';
import { UpdateInningsComponent } from './admin/update-innings/update-innings.component';


const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'ScoreCard', component: ScorecardComponent },
  { path: 'Commentry', component: CommentryComponent },
  {
    path: 'Admin', component: AdminComponent, children: [{ path: 'newmatch', component: NewMatchComponent },
    { path: 'defineteams', component: DefineTeamsComponent },
    { path: 'updateinning', component: UpdateInningsComponent }]
  },
  { path: '**', redirectTo: 'header' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
