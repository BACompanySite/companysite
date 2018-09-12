import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { AiComponent } from './ai/ai.component';
import { GameDevComponent } from './game-dev/game-dev.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SwDevComponent } from './sw-dev/sw-dev.component';
import { HomeComponent } from './home/home.component';

import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ContactComponent,
    AiComponent,
    GameDevComponent,
    MarketingComponent,
    SwDevComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
