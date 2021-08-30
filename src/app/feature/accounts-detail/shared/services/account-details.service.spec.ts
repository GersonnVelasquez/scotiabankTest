import { TestBed } from '@angular/core/testing';
import { AccountDetails } from 'src/app/core/modelsGlobals/account-details.model';
import { HttpService } from 'src/app/core/services/http.service';
import * as Rx from 'rxjs';
import { AccountDetailsService } from './account-details.service';

describe('AccountDetailsService', () => {
  let service: AccountDetailsService;

  let HttpServicelMock: Partial<HttpService>;

  const AccountsMock: AccountDetails[] = [
    new AccountDetails({
      id: "1",
      cuentaId: 1,
      fechaTransaccion: new Date("01-01-2021"),
      montoTransaacion: 4455,
      descripcion: "Abono agregado",
      tipoMovimiento: 'Credito',
      isCredito: true,
      isDebito: false
    }),
    new AccountDetails({
      id: "2",
      cuentaId: 1,
      fechaTransaccion: new Date("01-01-2021"),
      montoTransaacion: -4455,
      descripcion: "Abono agregado",
      tipoMovimiento: 'Debito',
      isCredito: false,
      isDebito: true
    }),
  ];

  HttpServicelMock = {
    doGet: () => {
      return Rx.of(AccountsMock);
    }
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpService, useValue: HttpServicelMock },
        AccountDetailsService
      ]
    });
    service = TestBed.inject(AccountDetailsService);
  });

  it('Debe crearse', () => {
    expect(service).toBeTruthy();
  });

  it('Debe regresar arreglo con instansia de AccountDetails', () => {
    service.getAccountDetails("1").subscribe(data => {
      expect(data[0]).toBeInstanceOf(AccountDetails);
    });
  });
});
