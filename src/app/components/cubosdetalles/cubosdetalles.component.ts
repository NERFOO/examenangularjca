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
  //DECLARACION DE UNA VARIABLE AUXILIAR PARA RECOGER EL ID POR PARAMETROS
  public id! : number;

  //DECLARACION DE UNA VARIABLE PARA ALMACENAR TODOS LOS COMENTARIOS
  public comentarios! : Array<Comentarios>;

  constructor(
    private _service : CuboService ,
    private _activatedRoute : ActivatedRoute
  ) { }

  //CARGA LOS COMENTARIOS DE DICHO CUBO
  cargarComentarios() : void {
    this._service.getComentarios(this.id).subscribe( res => {
      this.comentarios = res;
    })
  }

  //AL CARGAR LA PAGINA RECOGEMOS EL PARAMETRO Y LO ASIGNAMOS A LA VARIABLE EXTERNA
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['id'] != null) {
        this.id = parametros['id'];
        this.cargarComentarios();
      }
    })
  }

}
