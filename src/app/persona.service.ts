import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
  ]; 

  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService,
    private dataServices: DataServices){}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(indice: number){
    return this.personas[indice];
  }

  modificarPersona(index: number, persona: Persona){
    let personaAModificar = this.personas[index];
    personaAModificar.nombre = persona.nombre;
    personaAModificar.apellido = persona.apellido;
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1);
  }
}
