import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProviders, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { CuboService } from './services/cubo.service';
import { MenuComponent } from './components/menu/menu.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { CubosdetallesComponent } from './components/cubosdetalles/cubosdetalles.component';
import { LoginComponent } from './components/login/login.component';
import { PerfiluserComponent } from './components/perfiluser/perfiluser.component';
import { RegitrouserComponent } from './components/regitrouser/regitrouser.component';
import { ComprasuserComponent } from './components/comprasuser/comprasuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    MenuComponent,
    CubosmarcaComponent,
    CubosdetallesComponent,
    LoginComponent,
    PerfiluserComponent,
    RegitrouserComponent,
    ComprasuserComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    HttpClientModule ,
    routing
  ],
  providers: [appRoutingProviders, CuboService],
  bootstrap: [AppComponent]
})
export class AppModule { }
