// Todas las pruebas tienen dos partes generales el describe y el it

import { mensaje } from "./string";

// Sirve para agrupar pruebas, el describe va a ser referencia
// describe('Pruebas de Strings');

// Es una prueba, prueba en especifico
// it('Debe de regresar un string');

describe('Pruebas de string', () => {
    it('Debe de regresar un string', () => {
        const nombre = mensaje('Antonio');

        // Esto es lo que esperamos 
        expect(typeof nombre).toBe('string');

    });

    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan'
        const resp = mensaje(nombre);

        // Esto es lo que esperamos que contenga
        expect(resp).toContain(nombre);

    });
});