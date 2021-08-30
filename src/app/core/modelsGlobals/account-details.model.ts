export class AccountDetails {
    id: string;
    cuentaId: number;
    fechaTransaccion: Date;
    montoTransaacion: number;
    descripcion: string;

    constructor(item: AccountDetails) {
        this.id = item.id;
        this.cuentaId = item.cuentaId;
        this.fechaTransaccion = new Date(item.fechaTransaccion);
        this.montoTransaacion = item.montoTransaacion;
        this.descripcion = item.descripcion;
    }

    get tipoMovimiento(): string {
        if (this.montoTransaacion > 0) {
            return 'Credito'
        }
        return 'Debito';
    }

    get isDebito(): boolean {
        if (this.tipoMovimiento === 'Debito') {
            return true
        }
        return false;
    }

    get isCredito(): boolean {
        if (this.tipoMovimiento === 'Credito') {
            return true
        }
        return false;
    }
}