import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-cache',
  'pragma': 'no-cache'
});

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.scss']
})


export class CrearUsuariosComponent implements OnInit {
  nombre;
  apellido;
  usuario;
  contrasena;
  sede;
  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
  }

  volver() {
    history.back()
  }

  async crearUsuario() {
    let JSON = {
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.usuario,
      contrasena: this.contrasena,
      sede: this.sede
    }
    console.log(JSON);
    let result = await this.http.post('http://localhost:4201/users/insertar', JSON, { headers: httpHeaders }).toPromise();
    console.log(result);
    this.router.navigateByUrl('/')

  }
}
