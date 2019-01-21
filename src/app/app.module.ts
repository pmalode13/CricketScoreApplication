import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentryComponent } from './commentry/commentry.component';

import { NewMatchComponent } from './admin/new-match/new-match.component';
import { DefineTeamsComponent } from './admin/define-teams/define-teams.component';
import { UpdateInningsComponent } from './admin/update-innings/update-innings.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerComponent } from './admin/define-teams/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScorecardComponent,
    CommentryComponent,

    NewMatchComponent,
    DefineTeamsComponent,
    UpdateInningsComponent,
    AdminComponent,
    PlayerComponent,
   
  ],
  imports: [
    FormsModule,
        BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
