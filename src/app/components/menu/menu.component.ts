import { Component, OnInit } from '@angular/core';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas! : Array<string>;

  constructor(private _service : CuboService) { }

  cargarMarcas() : void {
    this._service.getCubosMarcas().subscribe( res => {
      this.marcas = res;
    })
  }

  ngOnInit(): void {
    this.cargarMarcas();
  }

}
