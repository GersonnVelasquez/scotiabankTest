export class Customer {
    cedula: string;
    nombres: string;
    apellidos: string;

    constructor(item: Customer) {
        this.cedula = item.cedula;
        this.nombres = item.nombres;
        this.apellidos = item.apellidos;
    }


    get nombreCompleto(): string {
        return `${this.nombres} ${this.apellidos}`;
    }
}