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
import { PlayerService } from './player.service';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { PlayerSearchFilterPipe } from './player-search-filter.pipe';
import { GameSearchFilterPipe } from './game-search-filter.pipe';
import { AddGameComponent } from './add-game/add-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerRankingComponent,
    JoinPlayerComponent,
    AdminLoginComponent,
    GamesComponent,
    ViewTablesComponent,
    UpdatePlayerComponent,
    AddPlayerComponent,
    PlayerSearchFilterPipe,
    GameSearchFilterPipe,
    AddGameComponent,
    UpdateGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: ViewTablesComponent},
      {path: 'joinplayer/:id', component: JoinPlayerComponent},
      {path: 'adminLogin', component: AdminLoginComponent},
      {path: 'addplayer', canActivate: [AdminGuard], component: AddPlayerComponent},
      {path: 'updateplayer/:id', canActivate: [AdminGuard], component: UpdatePlayerComponent},
      {path: 'updategame/:id', canActivate: [AdminGuard], component: UpdateGameComponent},
      {path: 'addgame', canActivate: [AdminGuard], component: AddGameComponent},
      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: '**', redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [
    PlayerService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
