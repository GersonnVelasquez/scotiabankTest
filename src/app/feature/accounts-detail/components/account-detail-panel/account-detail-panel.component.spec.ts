import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountDetails } from 'src/app/core/modelsGlobals/account-details.model';
import { AccountDetailsService } from '../../shared/services/account-details.service';
import * as Rx from 'rxjs';
import { AccountDetailPanelComponent } from './account-detail-panel.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AccountDetailPanelComponent', () => {
  let component: AccountDetailPanelComponent;
  let fixture: ComponentFixture<AccountDetailPanelComponent>;

  let AccountsServiceDetailMock: Partial<AccountDetailsService>;
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

  const mockRouter = {
    queryParamMap: Rx.of({
      get: (key: any) => 1
    })
  };


  AccountsServiceDetailMock = {
    getAccountDetails: () => {
      return Rx.of(AccountsMock);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDetailPanelComponent],
      imports: [SharedModule],
      providers: [
        { provide: AccountDetailsService, useValue: AccountsServiceDetailMock },
        { provide: ActivatedRoute, useValue: mockRouter }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Fondo en verde si es credito', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#row-1').classList.contains('bg-green')).toBeTrue();
  });

  it('Fondo en rojo si es debito', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#row-2').classList.contains('bg-red')).toBeTrue();
  });

  it('Debe guardar numero de cuenta que llega por queryparams', () => {
    expect(component.noCuenta.toString()).toBe("1");
  });

  it('Debe llamar datos en onInit', () => {
    expect(component.accounsDetails.length).toBe(AccountsMock.length);
  });

});
