// Es una clase que tiene un monton de metodos y funciones que nos van a servir para poder realizar estas pruebas de componentes y elementos de Angular
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';


// Pruebas de integracion
describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        // Configuramos el TestBed
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService], // Proveemos el servicio
            imports: [HttpClientModule] // Importamos el Http que usa el servicio
        });

        // Crear un componente ya compilado y procesado por el TestBed
        // Esto regresa un Fixture el cual nos permite poder acceder al html, a los componentes del DOM y muchas cosas mas 
        fixture = TestBed.createComponent(MedicoComponent);

        // De esta manera tengo la instancia del componente y podemos utilizar todos sus metodos y a la vez tengo el fixture que me permite acceder al html
        component = fixture.componentInstance;
    });




    // Esta es una de las pruebas que por lo general siempre lo ponen en el CLI cuando se crean pruebas automatizadas
    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        const nombre = 'Juan';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);
    });

});