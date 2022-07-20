import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){
    }

    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-a5dae-default-rtdb.europe-west1.firebasedatabase.app/datos.json', personas)
        .subscribe(
            response => console.log(response),
            error => console.log(error)
        );
    }
}
