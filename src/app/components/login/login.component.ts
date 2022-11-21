import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //DECLARACION DE UNA VARIABLE PARA ALMACENAR EL TOKEN DE USUARIO
  public token! : string;

  //DECLARACION DE LOS CAMPOS DEL HTML Y OBTENER SUS VALORES
  @ViewChild("username") userName! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(
    private _service : CuboService ,
    private _router : Router
  ) { }

  cargarToken() : void {
    var userName = this.userName.nativeElement.value;
    var password = this.password.nativeElement.value;

    //CREACION DE UN NUEVO USUARIO PARA EL PASO DE VALORES AL SERVICIO
    var newUser = new User(userName, password);

    this._service.postLogin(newUser).subscribe( res => {
      this.token = res;

      //DECLARACION DEL TOKEN EN EL LOCALSTORAGE
      localStorage.setItem('token', res.response);

      //REDIRECCION AL PERFIL DEL USUARIO DESPUES DE HACER LOGIN
      this._router.navigate(["/perfiluser/"]);
    })
  }

  ngOnInit(): void {
  }

}
