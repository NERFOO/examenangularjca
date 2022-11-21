import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { Error404Component } from "./components/error404/error404.component";
import { CubosmarcaComponent } from "./components/cubosmarca/cubosmarca.component";
import { CubosdetallesComponent } from "./components/cubosdetalles/cubosdetalles.component";
import { LoginComponent } from "./components/login/login.component";
import { PerfiluserComponent } from "./components/perfiluser/perfiluser.component";
import { RegitrouserComponent } from "./components/regitrouser/regitrouser.component";
import { ComprasuserComponent } from "./components/comprasuser/comprasuser.component";

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "cubos/:name" , component : CubosmarcaComponent},
    {path : "detallescubo/:id" , component : CubosdetallesComponent},
    {path : "login" , component : LoginComponent},
    {path : "perfiluser" , component : PerfiluserComponent},
    {path : "registrouser" , component : RegitrouserComponent},
    {path : "comprasuser" , component : ComprasuserComponent},
    {path : "**" , component : Error404Component},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);