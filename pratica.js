function calcularPrecio(precioBase, descuento) {
    if (precioBase <= 0 || descuento < 0 || descuento > 100) {
        console.log("Los valores ingresados son inválidos");
    } else if (descuento === 0) {
        precioBase = 0;
        return precioBase;
    } else if (descuento > 0 && descuento <= 100) {
        resultado = precioBase - (precioBase * descuento / 100);
        console.log("El precio final con el descuento es " + resultado);
    }
}

calcularPrecio(2000, 50 );
