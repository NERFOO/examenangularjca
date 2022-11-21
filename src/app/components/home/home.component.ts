import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //DECLARACION DE UNA VARIABLE PARA ALMACENAR TODOS LOS CUBOS
  public cubos! : Array<Cubo>;

  //LLAMADA AL SERVICIO
  constructor(private _service : CuboService) { }

  //FUNCION PARA OBTENER TODOS LOS CUBOS
  cargarCubos() : void {
    this._service.getCubos().subscribe( res => {
      this.cubos = res;
    })
  }

  //CARGAR AL INICIAR LA PAGINA LOS CUBOS
  ngOnInit(): void {
    this.cargarCubos();
  }

}
