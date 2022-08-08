import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {
    it('Debe de retornar true', () => {
        const resp = usuarioIngresado();
        // expect(resp).toBe(true);

        // Para los booleanos podemos utlizar otras funciones, este es para true
        expect(resp).toBeTruthy();

        // Para booleano false
        // expect(resp).not.toBeTruthy();
        // expect(resp).toBeFalsy();
    });
});