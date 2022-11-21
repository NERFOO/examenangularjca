import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cubo } from './../models/cubo';
import { User } from '../models/user';
import { Usuario } from '../models/usuario';

//COMPONENTE CENTRALIZADO PARA LA DECLARACION DE TODOS LOS SERVICIOS

@Injectable()
export class CuboService {
    constructor(private _http : HttpClient) { }

    //LEER TODOS LOS CUBOS DE LA API (SIN TOKEN)
    getCubos() : Observable<any> {
        var request = "/api/Cubos/";
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    //LEER TODOS LOS CUBOS DE LA API POR MARCAS (SIN TOKEN)
    getCubosMarcas() : Observable<any> {
        var request = "/api/Cubos/Marcas/";
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    //LEER TODOS LOS CUBOS DE LA MARCA POR LA QUE SE FILTRA (SIN TOKEN)
    getCubosMarcasString(name : string) : Observable<any> {
        var request = "/api/Cubos/CubosMarca/" + name;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    //LEER TODOS LOS COMENTARIOS QUE TIENE UN CUBO POR ID (SIN TOKEN)
    getComentarios(id : number) : Observable<any> {
        var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

    //INICIAR SESION CON AUTHENTICACION (DEVUELVE TOKEN)
    postLogin(usuario : User) : Observable<any> {
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/Manage/Login/";
        var url =  environment.urlCubos + request;

        return this._http.post(url, json, {headers : header});
    }

    //DEVUELVE LOS DATOS DEL USUARIO HABIENDO OBTENIDO UN TOKEN
    getPerfilUser() : Observable<any> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.urlCubos + '/api/Manage/PerfilUsuario/';
        return this._http.get(url, { headers: cabecera });
    }

    //ENVIA LOS DATOS PARA LA CREACION DE UN USUARIO NUEVO
    postRegistro(usuario : Usuario) : Observable<any> {
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/Manage/RegistroUsuario";
        var url =  environment.urlCubos + request;

        return this._http.post(url, json, {headers : header});
    }

    //DEVUELVE TODAS LAS COMPRAS REALIZADAS POR EL USUARIO
    getComprasUser() : Observable<any> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        const url = environment.urlCubos + '/api/Compra/ComprasUsuario/';
        return this._http.get(url, { headers: cabecera });
    }


}