import { Jugador } from './clase';


describe('Pruebas de clases', () => {

    // Podemos declarar la instancian fuera de la prueba para que no haya muchas declaraciones \
    // Debemos inicializar por que si no las pruebas no se haran independiente, todas las pruebas modificaran las propiedades de esta clase
    let jugador = new Jugador();

    // Ciclos de vida de las pruebas

    // Antes de que se ejecuten todas las pruebas, solo se hace una vez cuando empieza a hacer el describe
    beforeAll(() => {
        // console.log('Cada uno de los tipos beforeAll');

    });

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        // console.log('Cada uno de los tipos beforeEach');
        // jugador.hp = 100;
        jugador = new Jugador();
    });

    // Es lo mismo que el beforeAll solamente que se ejecuta cuando todas las pruebas finalizan
    afterAll(() => {
        // console.log('Cada uno de los tipos afterAll');

    });

    // Se ejecuta una vez que termina cada una de las pruebas
    afterEach(() => {
        // console.log('Cada uno de los tipos afterEach');
        // jugador.hp = 100;

    });


    it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);

    });

    it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
        // const jugador = new Jugador();
        console.log('Esta prueba va a fallar');

        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });

    it('Debe de retornar 0 de hp si recibe 100 de daño o mas', () => {
        // const jugador = new Jugador();

        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);
    });
});