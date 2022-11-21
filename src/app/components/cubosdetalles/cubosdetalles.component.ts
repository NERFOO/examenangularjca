import { Component, OnInit } from '@angular/core';
import { CuboService } from 'src/app/services/cubo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentarios } from 'src/app/models/comentario';

@Component({
  selector: 'app-cubosdetalles',
  templateUrl: './cubosdetalles.component.html',
  styleUrls: ['./cubosdetalles.component.css']
})
export class CubosdetallesComponent implements OnInit {
  public id! : number;
  public comentarios! : Array<Comentarios>;

  constructor(
    private _service : CuboService ,
    private _activatedRoute : ActivatedRoute
  ) { }

  cargarComentarios() : void {
    this._service.getComentarios(this.id).subscribe( res => {
      this.comentarios = res;
    })
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['id'] != null) {
        this.id = parametros['id'];
        this.cargarComentarios();
      }
    })
  }

}
