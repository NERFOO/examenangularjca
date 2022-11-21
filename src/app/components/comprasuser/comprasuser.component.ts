import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-comprasuser',
  templateUrl: './comprasuser.component.html',
  styleUrls: ['./comprasuser.component.css']
})
export class ComprasuserComponent implements OnInit {
  public compras! : Array<Compra>;

  constructor(private _service : CuboService) { }

  comprasRealizadas() : void {
    this._service.getComprasUser().subscribe( res => {
      this.compras = res;
    })
  }

  ngOnInit(): void {
    this.comprasRealizadas();
  }

}
