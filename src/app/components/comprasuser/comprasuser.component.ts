import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-comprasuser',
  templateUrl: './comprasuser.component.html',
  styleUrls: ['./comprasuser.component.css']
})
export class ComprasuserComponent implements OnInit {
  //DECLARACION DE UNA VARIABLE PARA RECOGER LAS COMPRAS DE UN USUARIO
  public compras! : Array<Compra>;

  constructor(private _service : CuboService) { }

  //FUNCION PARA CARGAR LAS COMPRAS DEL USUARIO
  comprasRealizadas() : void {
    this._service.getComprasUser().subscribe( res => {
      this.compras = res;
    })
  }

  //AL CARGAR LA PAGINA MOSTRAMOS LAS COMPRAS
  ngOnInit(): void {
    this.comprasRealizadas();
  }

}
