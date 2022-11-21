import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cubo } from './../models/cubo';
import { User } from '../models/user';
import { Usuario } from '../models/usuario';


@Injectable()
export class CuboService {
    constructor(private _http : HttpClient) { }

    getCubos() : Observable<any> {
        var request = "/api/Cubos/";
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    getCubosMarcas() : Observable<any> {
        var request = "/api/Cubos/Marcas/";
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    getCubosMarcasString(name : string) : Observable<any> {
        var request = "/api/Cubos/CubosMarca/" + name;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    getComentarios(id : number) : Observable<any> {
        var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    postLogin(usuario : User) : Observable<any> {
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/Manage/Login/";
        var url =  environment.urlCubos + request;

        return this._http.post(url, json, {headers : header});
    }

    getPerfilUser() : Observable<any> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.urlCubos + '/api/Manage/PerfilUsuario/';
        return this._http.get(url, { headers: cabecera });
    }

    postRegistro(usuario : Usuario) : Observable<any> {
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/Manage/RegistroUsuario";
        var url =  environment.urlCubos + request;

        return this._http.post(url, json, {headers : header});
    }

    getComprasUser() : Observable<any> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.urlCubos + '/api/Compra/ComprasUsuario/';
        return this._http.get(url, { headers: cabecera });
    }


}