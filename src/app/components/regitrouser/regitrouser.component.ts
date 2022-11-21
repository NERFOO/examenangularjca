import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-regitrouser',
  templateUrl: './regitrouser.component.html',
  styleUrls: ['./regitrouser.component.css']
})
export class RegitrouserComponent implements OnInit {
  //DECLARACION DE UNA VARIABLE PARA RECOGER LOS DATOS DEL NUEVO USUARIO
  public user! : Usuario;

  //DECLARACION DE UNA VARIABLE AUXILIAR PARA RECOGER UN MENSAJE EN CASO DE QUE LAS CONTRASEÑAS SEAN DIFERENTES
  public mensaje! : string;


  //DECLARACION DE LOS CAMPOS GENERADOS EN EL HTML Y RECOGER SUS VALORES
  @ViewChild("username") userName! : ElementRef;
  @ViewChild("email") email! : ElementRef;
  @ViewChild("password") password! : ElementRef;
  @ViewChild("confirmpassword") confirmPassword! : ElementRef;

  constructor(
    private _service : CuboService ,
    private _router : Router
  ) { }

  registroUser() : void {
    //REASIGNAMOS LOS VALORES Y RECOGEMOS EL VAOR DE CADA CAJA
    var id = 0;
    var userName = this.userName.nativeElement.value;
    var email = this.email.nativeElement.value;
    var password = this.password.nativeElement.value;
    var confirmPassword = this.confirmPassword.nativeElement.value;

    //VALIDACION PARA COMPROBAR SI LAS COMTRASEÑAS SON IGUALES
    if(password == confirmPassword) {
      //SE GENERA EL NUEVO USUARIO
      var newUser = new Usuario(id, userName, email, password);
      console.log(newUser)

      //Y SE LE PASA AL SERVICIO PARA AÑADIRLO
      this._service.postRegistro(newUser).subscribe( () => {
        this._router.navigate(["/login/"]);
      })
    } else {
      //EN CASO DE QUE LAS CONTRASEÑAS SEAN DISTINTAS
      this.mensaje = "Las contraseñas no son iguales";
    }
  }

  ngOnInit(): void {
  }

}
