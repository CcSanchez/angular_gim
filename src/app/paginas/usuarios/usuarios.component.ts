import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sede'];
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.obtenerDatos('Norte');
  }


  async obtenerDatos(sede) {
    try {
      let data: any = await this.http.get(`http://localhost:4201/users?sede=${sede}`).toPromise();
      console.log(data);
      this.dataSource.data = data;
    } catch (error) {
      console.log("Error al obtener datos")
    }
  }
}
