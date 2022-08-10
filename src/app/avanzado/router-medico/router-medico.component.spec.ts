import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, from, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigateByUrl(params: any) {
  }
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;

  // Manipular los valores de unos observables
  // Ponemos la propiedad privada por que no debe de salir de este lugar
  // private subject = new Subject();

  // push(valor: any) {
  //   this.subject.next(valor);
  // }

  // get params() {
  //   // Regresa un nuevo Observable
  //   // A lo que sea que este subscrito va a recibir una vez que hagamos el push
  //   return this.subject.asObservable();
  // }

  params: Observable<any> = from([{ id: 'nuevo' }]);
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Medico cuando se guarde', () => {
    const router = TestBed.get(Router);
    // Espiara el router y buscara el navigateByUrl
    const spy = spyOn(router, 'navigateByUrl');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith('/medico/123');
  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    // const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);


    expect(component.id).toBe('nuevo');

  })


});
