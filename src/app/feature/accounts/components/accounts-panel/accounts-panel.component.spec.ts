import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { account } from 'src/app/core/modelsGlobals/account.model';
import { AccountsService } from '../../shared/services/accounts.service';
import * as Rx from 'rxjs';
import { AccountsPanelComponent } from './accounts-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';

describe('AccountsPanelComponent', () => {
  let component: AccountsPanelComponent;
  let fixture: ComponentFixture<AccountsPanelComponent>;
  let AccountsServiceMock: Partial<AccountsService>;
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


  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };


  AccountsServiceMock = {
    getAccounts: () => {
      return Rx.of(AccountsMock);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [AccountsPanelComponent],
      providers: [
        { provide: AccountsService, useValue: AccountsServiceMock },
        { provide: Router, useValue: mockRouter }
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Consultar cuentas en onInit', () => {
    expect(component.accounts).toEqual(AccountsMock);
  });

  it('Debe mostrar 3 cuentas', () => {
    const cuentasHTML = fixture.debugElement.nativeElement.querySelectorAll('app-account-card');
    expect(cuentasHTML.length).toEqual(AccountsMock.length);
  });

  it('Lleva a pantalla de detalle', () => {
    component.goToDetails('2');
    expect(mockRouter.navigate).toHaveBeenCalledWith(
      ['./detalle'], { queryParams: { id: '2' } }
    );
  });
});
