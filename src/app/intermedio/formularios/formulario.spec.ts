import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';



describe('Formularios', () => {

    // definimos que el component es de tipo FormularioRegister
    let component: FormularioRegister;

    beforeEach(() => {
        // Mandamos una nueva instancia del FormBuilder por que tenemos que cumplir con los requerimientos del constructors
        component = new FormularioRegister(new FormBuilder());

    });

    it('Debe de crear un formulario con dos campos, email y password', () => {
        expect(component.form.contains('email')).toBeTruthy()
        expect(component.form.contains('password')).toBeTruthy()
    });

    it('El email debe de ser obligatorio', () => {
        const control = component.form.get('email');
        control?.setValue('');

        expect(control?.valid).toBeFalsy();
    });

    it('El email debe de ser un correo válido', () => {
        const control = component.form.get('email');
        control?.setValue('asdasd@gmail.com');

        expect(control?.valid).toBeTruthy();
    });

});