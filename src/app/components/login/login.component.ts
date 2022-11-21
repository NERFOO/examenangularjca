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
  public token! : string;

  @ViewChild("username") userName! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(
    private _service : CuboService ,
    private _router : Router
  ) { }

  cargarToken() : void {
    var userName = this.userName.nativeElement.value;
    var password = this.password.nativeElement.value;
    var newUser = new User(userName, password);

    this._service.postLogin(newUser).subscribe( res => {
      this.token = res;
      localStorage.setItem('token', res.response);
      this._router.navigate(["/perfiluser/"]);
    })
  }

  ngOnInit(): void {
  }

}
