export class account {
    cuentaId: string;
    tipoCuenta: string;
    estado: number;
    valorDisponible: number;
    sortOrder: number;

    constructor(item: account) {
        this.cuentaId = item.cuentaId;
        this.tipoCuenta = item.tipoCuenta;
        this.estado = item.estado;
        this.valorDisponible = item.valorDisponible;

        let orderNumber = sortOrderRules.get(item.tipoCuenta);

        if (orderNumber) {
            this.sortOrder = orderNumber;
        } else {
            throw new Error("Tipo de cuenta no encontrada para el ordenamiento");
        }

    }

}

let sortOrderRules = new Map([
    ["Cuenta de ahorro", 1],
    ["Cuenta corriente", 2],
    ["Tarjeta de crédito", 3],
]);
