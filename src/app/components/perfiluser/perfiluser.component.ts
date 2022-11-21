import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent implements OnInit {
  public user! : Usuario;

  constructor(
    private _service : CuboService
  ) { }

  cargarPerfilUser() : void {
    this._service.getPerfilUser().subscribe( res => {
      this.user = res;
    })
  }

  ngOnInit(): void {
    this.cargarPerfilUser();
  }

}
