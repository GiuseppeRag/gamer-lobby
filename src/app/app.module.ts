import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerRankingComponent } from './player-ranking/player-ranking.component';
import { RouterModule } from '@angular/router';
import { JoinPlayerComponent } from './join-player/join-player.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminGuard } from './admin.guard';
import { GamesComponent } from './games/games.component';
import { ViewTablesComponent } from './view-tables/view-tables.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { combineLatest } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PlayerRankingComponent,
    JoinPlayerComponent,
    AdminLoginComponent,
    GamesComponent,
    ViewTablesComponent,
    UpdatePlayerComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: ViewTablesComponent},
      {path: 'joinplayer/:id', component: JoinPlayerComponent},
      {path: 'adminLogin', component: AdminLoginComponent},
      {path: 'addplayer', canActivate: [AdminGuard], component: AddPlayerComponent},
      {path: 'updateplayer/:id', canActivate: [AdminGuard], component: UpdatePlayerComponent},
      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: '**', redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
