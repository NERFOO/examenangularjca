import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosmarcaComponent implements OnInit {
  //DECLARACION DE UNA VARIABLE PARA ALMACENAR TODOS LOS CUBOS POR LA MARCA FILTRADA
  public cubosMarca! : Array<Cubo>;

  //DECLARACION DE LA MARCA PASADA POR PARAMETROS
  public marca! : string;

  constructor(
    private _service : CuboService ,
    private _activatedRoute : ActivatedRoute
  ) { }

  //CARGA LOS CUBOS POR LA MARCA FILTRADA
  cargarCubosMarca() : void {
    this._service.getCubosMarcasString(this.marca).subscribe(res => {
      this.cubosMarca = res;
    })
  }

  //AL CARGAR LA PAGINA RECOGE EL PARAMETRO PARA EL FILTRO
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['name'] != null) {
        //SI EL PARAMETRO NO ES NULL LO ASIGNA A LA VARIABLE EXTERNA
        this.marca = parametros['name'];
        //Y CARGA LOS CUBOS FILTRADOS POR LA MARCA DEL PARAMETRO RECIBIDA
        this.cargarCubosMarca();
      }
    })
  }

}
