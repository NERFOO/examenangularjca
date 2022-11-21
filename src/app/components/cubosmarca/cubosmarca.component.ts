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
  public cubosMarca! : Array<Cubo>;
  public marca! : string;

  constructor(
    private _service : CuboService ,
    private _activatedRoute : ActivatedRoute
  ) { }

  cargarCubosMarca() : void {
    this._service.getCubosMarcasString(this.marca).subscribe(res => {
      this.cubosMarca = res;
    })
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros : Params) => {
      if(parametros['name'] != null) {
        this.marca = parametros['name'];
        this.cargarCubosMarca();
      }
    })
  }

}
