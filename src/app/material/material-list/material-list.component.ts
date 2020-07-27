import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1:Estudiante;
  estudiante2:Estudiante;
  estudiante3:Estudiante;

  listaEstudiantes:Estudiante[];

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MterialList');
    this.estudiante1={
      id:1,
      nombre:'Luis Aviles',
      ciudad:'Cochabamba',
      fotoUrl:'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
    };
    this.estudiante2={
      id:2,
      nombre:'Jorge Perez',
      ciudad:'Lima',
      fotoUrl:'https://i.pinimg.com/236x/68/a3/95/68a39500b8fefceb88c7599350b7eae5--panda-tatoo-panda-illustration.jpg'
    };
    this.estudiante3={
      id:3,
      nombre:'Maria R.',
      ciudad:'Bogota',
      fotoUrl:'https://www2.yggtorrent.ch/files/avatars/EPHUGV4notcN2f9Q86jSbsFDYR3qvi.jpeg'
    };

    this.listaEstudiantes=[
      this.estudiante1,
      this.estudiante2,
      this.estudiante3
    ];

  }
    onMouseClick($event){
      console.log('Click on: '+ $event.nombre);
    }

}
