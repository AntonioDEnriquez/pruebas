import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor(public medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    return this.medicoService.getMedicos().subscribe((resp: any) => this.medicos = resp);
  }

}
