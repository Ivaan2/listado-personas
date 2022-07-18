import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombre: string;
  apellido: string;

  agregarPersona(){
    let persona1 = new Persona(this.nombre, this.apellido);
    this.personaCreada.emit(persona1);
  }
}
