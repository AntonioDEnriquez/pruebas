import { obtenerRobots } from './arreglos';

describe('Prueba de arreglos', () => {

    it('Debe de retronar al menos 3 robots', () => {
        const res = obtenerRobots();

        // Debe de ser un arreglo mayor o igual a 3
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir Megaman o Ultron', () => {
        const res = obtenerRobots();

        // Debe de ser un arreglo mayor o igual a 3
        expect(res).toContain('Megaman');
        expect(res).toContain('Ultron');
    });
});