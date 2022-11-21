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
  public user! : Usuario;
  public mensaje! : string;

  @ViewChild("username") userName! : ElementRef;
  @ViewChild("email") email! : ElementRef;
  @ViewChild("password") password! : ElementRef;
  @ViewChild("confirmpassword") confirmPassword! : ElementRef;

  constructor(
    private _service : CuboService ,
    private _router : Router
  ) { }

  registroUser() : void {
    var id = 0;
    var userName = this.userName.nativeElement.value;
    var email = this.email.nativeElement.value;
    var password = this.password.nativeElement.value;
    var confirmPassword = this.confirmPassword.nativeElement.value;

    if(password == confirmPassword) {
      var newUser = new Usuario(id, userName, email, password);
      console.log(newUser)

      this._service.postRegistro(newUser).subscribe( () => {
        this._router.navigate(["/login/"]);
      })
    } else {
      this.mensaje = "Las contraseñas no son iguales";
    }
  }

  ngOnInit(): void {
  }

}
