import { ComponentFixture, TestBed } from '@angular/core/testing';
import { account } from 'src/app/core/modelsGlobals/account.model';

import { AccountCardComponent } from './account-card.component';

describe('AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;
  const accountMock: account = new account({
    cuentaId: "1",
    tipoCuenta: "Cuenta de ahorro",
    estado: 1,
    valorDisponible: 42420.00,
    sortOrder: 1
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    component.account = accountMock;
    fixture.detectChanges();
  });

  it('Muestra informacion de header', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#account-header').innerText).toEqual('1 - Cuenta de ahorro');
  });

  it('Muestra informacion de detalle', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#account-detail').innerText).toEqual(`$42,420.00\nSaldo disponible`);
  });

  it('Emite evento de detalle con ID de cuenta', () => {
    component.getDetails.subscribe(data => {
      expect(data).toEqual('1');
    });
    let botonDetalle = fixture.debugElement.nativeElement.querySelector('#get-details');
    botonDetalle.click();
  });


});
