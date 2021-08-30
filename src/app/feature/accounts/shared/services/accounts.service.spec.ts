import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http.service';

import { AccountsService } from './accounts.service';
import * as Rx from 'rxjs';
import { account } from 'src/app/core/modelsGlobals/account.model';

describe('AccountsService', () => {
  let service: AccountsService;
  let HttpServicelMock: Partial<HttpService>;

  const AccountsMock: account[] = [
    new account({
      cuentaId: "1",
      tipoCuenta: "Cuenta de ahorro",
      estado: 0,
      valorDisponible: 42420,
      sortOrder: 1
    }),
    new account({
      cuentaId: "2",
      tipoCuenta: "Tarjeta de crédito",
      estado: 0,
      valorDisponible: 42420,
      sortOrder: 1
    }),
    new account({
      cuentaId: "3",
      tipoCuenta: "Cuenta de ahorro",
      estado: 0,
      valorDisponible: 42420,
      sortOrder: 1
    })
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
        AccountsService
      ]
    });
    service = TestBed.inject(AccountsService);
  });

  it('Debe crearse', () => {
    expect(service).toBeTruthy();
  });

  it('Debe regresar arreglo con instansia de account', () => {
    service.getAccounts().subscribe(data => {
      expect(data[0]).toBeInstanceOf(account);
    });
  });
});
