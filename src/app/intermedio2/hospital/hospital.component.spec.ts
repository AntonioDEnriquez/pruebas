import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  // El async le dice al beforEach que se espere hasta que la resolucion de esta funcion retorne
  // Y es asincrona por que normalmente los componentes tienen una contra parte del html y puede tardar unos segundos en acceder a el
  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [HospitalComponent]
    // })
    // No hace falta llamar esta funcion por que Angular trabaja con webpack por que se tiene el archivo del html y ts en el mismo lugar
    // .compileComponents();
  });

  beforeEach(async () => {

    // Configuracion del modulo y declaraciones del componente
    await TestBed.configureTestingModule({
      declarations: [HospitalComponent]
    });

    // Crear component
    fixture = TestBed.createComponent(HospitalComponent);
    // Intancia para obtener las funciones del componente
    component = fixture.componentInstance;

    // Para el ciclo de deteccion de cambios
    fixture.detectChanges();

  });

  it('Debe de crear un hospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
