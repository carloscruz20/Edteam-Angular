import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario={
    nombre:'Carlos'
  };
  
  placeholder={
    nombre:'Nombre'
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre='Ingrese'
    }, 3000);
  }
  
  onKeyUp($event){
    console.log('KeyUp, ',$event)
  }
  onBlur($event:FocusEvent){
    console.log('OnBlur, ',$event)
  }
}
