import { EMPTY, Observable, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    // Mandamos null por que no usare el http por que son pruebas unitarias
    // El null es un truco para evitar que me de el error este tipo de declaraciones
    const servicio = new MedicosService(null!);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });


    it('Init debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        // es una instruccion que nos permite poder hacer peticiones falsas cuando algo suceda, por ejemplo quiero expiar al servicio
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            // Se cambia solo por from
            // return Observable.from([medicos]);
            return from([medicos]);
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    it('Debe de llamar al servidor para agregar un medico', () => {

        const spy = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
            return EMPTY;
        })

        componente.agregarMedico();

        // Preguntamos si el metodo ha sido llamado
        expect(spy).toHaveBeenCalled()
    });

    it('Debe de agregar un nuevo médico al arreglo', () => {
        const medico = { id: 1, nombre: 'Juan' };

        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        // expect(componente.medicos.length).toBe(1);
        // Confirmamos de que efectivamente el medico que yo le mande de la respuesta este ahora incluido en el arreglo del componente
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });


    it('Si falla la adicion, la propiedad mensajeError debe de ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar al medico';

        spyOn(servicio, 'agregarMedico').and
            .returnValue(throwError(miError));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);

    });

    it('Debe de llamar al servidor para borrar al medico', () => {

        // Hace el click al confirm solo
        spyOn(window, 'confirm').and.returnValue(true);

        const spy = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');

        // Espera que el espia sea llamado con el argumento 1
        expect(spy).toHaveBeenCalledOnceWith('1')

    });

    it('No debe de llamar al servidor para borrar al medico', () => {

        // Hace el click al confirm solo
        spyOn(window, 'confirm').and.returnValue(false);

        const spy = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');

        // Espera que el espia no sea llamado con el argumento 1
        expect(spy).not.toHaveBeenCalledOnceWith('1');

    });

});
