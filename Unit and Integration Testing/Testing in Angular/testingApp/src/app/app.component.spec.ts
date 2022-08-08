import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // que exista el componente...
  });

  it(`should have as title 'testingApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testingApp');
  });

  it(`should have variable called 'vaiableInterna' with [] as default value`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.variableInterna).toBeTruthy(); // que exista...
    expect(app.variableInterna).toEqual([]); // que tenga el valor...
  });

  it('should render a message with value "Hi..."', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.span-container span')!.textContent).toContain('Hi...');
  });

  it('should add two numbers with suma function', () => { // prueba de caja negra
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mocketData = {num1:1, num2:2};
    const expectedResult = 3;
    const result = app.suma(mocketData.num1, mocketData.num2);
    expect(result).toEqual(expectedResult);
  });

});
