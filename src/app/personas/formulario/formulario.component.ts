import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  nombreInput:string = '';
  apellidoInput:string = '';  
  index: number;
  modoEdicion: number;

  constructor(private loggingService:LoggingService,
    private router: Router,
    private personaService:PersonasService,
    private route: ActivatedRoute){
      this.personaService.saludar.subscribe(
        (indice: number) => alert("El índice es: " + indice)
      );
    }

  ngOnInit(): void{
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion != null && this.modoEdicion == 1){
      let persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    if(this.nombreInput!='' && this.apellidoInput!=''){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      if(this.index){
        this.personaService.modificarPersona(this.index, persona1);     
      }else{
        this.personaService.agregarPersona(persona1);
      }
      this.router.navigate(['personas']);
    }
  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
