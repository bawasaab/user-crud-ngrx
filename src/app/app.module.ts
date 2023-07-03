import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotFoundComponent } from './not-found/not-found.component';
import { appReducer } from './state/app-state.reducers';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({'appState': appReducer}, {}),
    StoreDevtoolsModule.instrument({
      name: 'NGRX USER CRUD',
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
