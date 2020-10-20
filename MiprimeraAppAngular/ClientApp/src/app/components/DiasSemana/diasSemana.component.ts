import { Component } from '@angular/core'


@Component({

  selector: "diasSemana",
  templateUrl: "./diasSemana.component.html"

}
)

export class DiasSemana {

  nombre: string = "juanito";
  cursos: string[] = ["angular", "react", "Vue"]; 
  persona: object = {

    nombre: "pepe",
    apellido: "perez"
  }
  enlace: string = "https://www.google.com";
}
