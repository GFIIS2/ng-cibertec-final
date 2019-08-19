import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavComponent } from './components/common/nav/nav.component';
import { UsersModule } from './views/users/users.module';
import { routes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UsersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
