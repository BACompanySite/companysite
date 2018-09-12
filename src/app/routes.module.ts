import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact/contact.component';
import { AiComponent } from './ai/ai.component';
import { GameDevComponent } from './game-dev/game-dev.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SwDevComponent } from './sw-dev/sw-dev.component';
import { AppComponent } from './app.component';
import { Component } from '../../node_modules/@angular/core';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
    { path: '' , component: HomeComponent},
    { path: 'ai-ml-dl', component: AiComponent},
    { path: 'game-development', component: GameDevComponent},
    { path: 'digital-marketing', component: MarketingComponent},
    { path: 'sw-development', component: SwDevComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'home', component: HomeComponent }

]

@NgModule({
    imports:[RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )]
})

export class RoutesModule {}
