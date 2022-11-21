import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent implements OnInit {
  //DECLARACION DE UNA VARIABLE PARA RECOGER LOS DATOS DEL PERFIL DEL USUARIO
  public user! : Usuario;

  constructor(
    private _service : CuboService
  ) { }

  //SE LLAMA AL SERVICIO PARA RECOGER LOS DATOS DEL USUARIO
  cargarPerfilUser() : void {
    this._service.getPerfilUser().subscribe( res => {
      this.user = res;
    })
  }

  //SE CARGAN LOS DATOS DEL USUARIO AL CARGAR LA PAGINA
  ngOnInit(): void {
    this.cargarPerfilUser();
  }

}
