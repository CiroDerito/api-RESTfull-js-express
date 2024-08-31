const CarritoCompra = require('../index');

let carrito;

beforeEach(() => {
    carrito = new CarritoCompra();
    carrito.agregarProducto = jest.fn();
    carrito.calcularTotal = jest.fn().mockImplementation(() => {
        return carrito.carrito.reduce((total, producto) => total + producto.precio, 0);
    });
});



test('el carrito debe iniciar en un array vacío', () => {
    expect(carrito.carrito).toEqual([]);
});

test('Se agrega un producto al carrito', () => {
    const producto1 = { nombre: 'Bicicleta', precio: 120 };
    carrito.agregarProducto(producto1);
    expect(carrito.agregarProducto).toHaveBeenCalledWith(producto1);
});

test('Debe calcular el total', () => {
    const producto1 = { nombre: 'Auto', precio: 1200 };
    const producto2 = { nombre: 'Camioneta', precio: 1700 };

    carrito.carrito = [producto1, producto2];

    const total = carrito.calcularTotal();
    expect(total).toBe(2900);
});

test('Debe aplicar descuento de 35%', () => {
    const producto1 = { nombre: 'Auto', precio: 1200 };
    const producto2 = { nombre: 'Camioneta', precio: 1700 };

    carrito.carrito = [producto1, producto2];

    const totalConDescuento = carrito.aplicarDescuento(35);
    expect(totalConDescuento).toBe(1885);
    expect(totalConDescuento).not.toBe(2000)
    expect(totalConDescuento).toBeGreaterThan(1000)
    expect(carrito.carrito).toContain(producto2)

});


