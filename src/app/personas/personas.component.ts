import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService,
              private router: Router){
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El índice es: " + indice)
                );
              }

  //Cargar datos desde la base de datos Firebase Database
  ngOnInit(): void {
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: any): void => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    );
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}
