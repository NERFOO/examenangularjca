import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos! : Array<Cubo>;

  constructor(private _service : CuboService) { }

  cargarCubos() : void {
    this._service.getCubos().subscribe( res => {
      this.cubos = res;
    })
  }

  ngOnInit(): void {
    this.cargarCubos();
  }

}
