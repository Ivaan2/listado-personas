import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
  ]; 

  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService,
    private dataServices: DataServices){}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)

    if(this.personas == null){
      this.personas = [];
    }

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
    this.dataServices.modificarPersona(index, persona);
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1);
  }
}
