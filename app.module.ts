import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { ModelPersoComponent } from './model-perso/model-perso.component';
import { ModelArmeComponent } from './model-arme/model-arme.component';
import { ArmeComponent } from './arme/arme.component';
import { PersoComponent } from './perso/perso.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ModelPersoComponent,
    ModelArmeComponent,
    ArmeComponent,
    PersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
