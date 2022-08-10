import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        // Disparar la deteccion de cambios
        fixture.detectChanges();

        // Hacer referencia al elemento html en el cual se muestra la leyenda
        // El query me permite buscar un unico element del html
        // El By ayuda a poder realizar selectores muy facilmente, por ejemplo, si quisieramos por alguna directiva personalizada, por clases css, por id
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga')

    });

    it('Debe de mostrar en el input el valor del progreso', (done) => {
        component.cambiarValor(5);

        fixture.detectChanges();

        // Cuando ya este lista la deteccion de cambios y este lista para ser evaluada ejecuta la siguiente funcion
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
            // console.log(elem);
            expect(elem.value).toBe('55');
            done();
        });
    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        // Simulamos el click, el segundo elemento es informacion sobre en que lado se hizo click, etc.
        botones[0].triggerEventHandler('click', null);

        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);

        expect(component.progreso).toBe(50);

    })

    it('En el titulo del componente, debe de mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        // Simulamos el click, el segundo elemento es informacion sobre en que lado se hizo click, etc.
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');


        // botones[1].triggerEventHandler('click', null);



    })

});
