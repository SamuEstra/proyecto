import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],
})
export class CalcularPage {
  inputNumber: string = '';
  selectedSystem: string = 'decimal';
  decimal: string = '';
  binario: string = '';
  octal: string = '';
  hexadecimal: string = '';
  maya: string = '';
  resultsVisible: boolean = false;

  conversionSteps1: string[] = [];
  conversionSteps2: string[] = [];
  conversionSteps3: string[] = [];
  conversionSteps4: string[] = [];
  conversionSteps5: string[] = [];
  conversionSteps6: string[] = [];

  // Variables para mostrar el card
  showInfoCard: boolean = false;
  cardTitle: string = '';
  cardContent: string = '';

  constructor(private alertController: AlertController) {}

  convertir() {
    const num = this.inputNumber.trim();
    this.resultsVisible = false;

    if (this.selectedSystem === 'decimal' && this.isDecimal(num)) {
      this.decimal = num;
      this.binario = this.convertirABinario(parseInt(num, 10));
      this.octal = this.convertirAOctal(parseInt(num, 10));
      this.hexadecimal = this.convertirAHexadecimal(parseInt(num, 10));
      this.maya = this.convertirAMaya(parseInt(num, 10));
    } else if (this.selectedSystem === 'binario' && this.isBinario(num)) {
      this.decimal = this.convertirADecimal(num);
      this.binario = num;
      this.octal = this.convertirAOctal(parseInt(this.decimal, 10));
      this.hexadecimal = this.convertirAHexadecimal(parseInt(this.decimal, 10));
      this.maya = this.convertirAMaya(parseInt(this.decimal, 10));
    } else if (this.selectedSystem === 'octal' && this.isOctal(num)) {
      this.decimal = this.convertirADecimalDesdeOctal(num);
      this.binario = this.convertirABinario(parseInt(this.decimal, 10));
      this.octal = num;
      this.hexadecimal = this.convertirAHexadecimal(parseInt(this.decimal, 10));
      this.maya = this.convertirAMaya(parseInt(this.decimal, 10));
    } else if (this.selectedSystem === 'hexadecimal' && this.isHexadecimal(num)) {
      this.decimal = this.convertirADecimalDesdeHexadecimal(num);
      this.binario = this.convertirABinario(parseInt(this.decimal, 10));
      this.octal = this.convertirAOctal(parseInt(this.decimal, 10));
      this.hexadecimal = num.toUpperCase();
      this.maya = this.convertirAMaya(parseInt(this.decimal, 10));
    } else if (this.selectedSystem === 'maya' && this.isMaya(num)) {
      this.decimal = this.convertirADecimalDesdeMaya(num);
      this.binario = this.convertirABinario(parseInt(this.decimal, 10));
      this.octal = this.convertirAOctal(parseInt(this.decimal, 10));
      this.hexadecimal = this.convertirAHexadecimal(parseInt(this.decimal, 10));
      this.maya = num;
    } else {
      this.limpiar();
      return;
    }
    this.resultsVisible = true;
  }

  limpiar() {
    this.inputNumber = '';
    this.decimal = '';
    this.binario = '';
    this.octal = '';
    this.hexadecimal = '';
    this.maya = '';
    this.resultsVisible = false;
  }

  isDecimal(num: string): boolean {
    return /^\d+$/.test(num);
  }

  isBinario(num: string): boolean {
    return /^[01]+$/.test(num);
  }

  isOctal(num: string): boolean {
    return /^[0-7]+$/.test(num);
  }

  isHexadecimal(num: string): boolean {
    return /^[0-9A-Fa-f]+$/.test(num);
  }

  isMaya(num: string): boolean {
    return /^[0-9]+$/.test(num);  // Ajusta la validación según los números mayas
  }

  convertirABinario(num: number): string {
    this.conversionSteps1 = [];
    let numero = num;
    let binario = '';
    while (numero > 0) {
    const resto = numero % 2;
    binario = resto + binario;
    this.conversionSteps1.push(`${numero} / 2 = ${Math.floor(numero / 2)} con resto ${resto}`);
    numero = Math.floor(numero / 2);
    }
    return binario || '0';
    }

  convertirADecimal(bin: string): string {
    this.conversionSteps2 = [];
    let decimal = 0;
    let potencia = bin.length - 1;
    for (let i = 0; i < bin.length; i++) {
    const digito = parseInt(bin.charAt(i), 10);
    decimal += digito * Math.pow(2, potencia);
    this.conversionSteps2.push(`${digito} * 2^${potencia} = ${digito * Math.pow(2, potencia)}`);
    potencia--;
    }
    return decimal.toString();
    }

  convertirAOctal(num: number): string {
    this.conversionSteps3 = [];
    let numero = num;
    let octal = '';
    while (numero > 0) {
    const resto = numero % 8;
    octal = resto + octal;
    this.conversionSteps3.push(`${numero} / 8 = ${Math.floor(numero / 8)} con resto ${resto}`);
    numero = Math.floor(numero / 8);
    }
    return octal || '0';
    }

  convertirADecimalDesdeOctal(octal: string): string {
    this.conversionSteps4 = [];
    let decimal = 0;
    let potencia = octal.length - 1;
    for (let i = 0; i < octal.length; i++) {
    const digito = parseInt(octal.charAt(i), 10);
    decimal += digito * Math.pow(8, potencia);
    this.conversionSteps4.push(`${digito} * 8^${potencia} = ${digito * Math.pow(8, potencia)}`);
    potencia--;
    }
    return decimal.toString();
    }

  convertirAHexadecimal(num: number): string {
    this.conversionSteps5 = [];
    let numero = num;
    let hexadecimal = '';
    while (numero > 0) {
    const resto = numero % 16;
    hexadecimal = (resto < 10 ? resto : String.fromCharCode(55 + resto)) + hexadecimal;
    this.conversionSteps5.push(`${numero} / 16 = ${Math.floor(numero / 16)} con resto ${resto}`);
    numero = Math.floor(numero / 16);
    }
    return hexadecimal || '0';
    }

  convertirADecimalDesdeHexadecimal(hex: string): string {
    this.conversionSteps6 = [];
    let decimal = 0;
    let potencia = hex.length - 1;
    for (let i = 0; i < hex.length; i++) {
    const digito = parseInt(hex.charAt(i), 16);
    decimal += digito * Math.pow(16, potencia);
    this.conversionSteps6.push(`${digito} * 16^${potencia} = ${digito * Math.pow(16, potencia)}`);
    potencia--;
    }
    return decimal.toString();
    }

  convertirAMaya(num: number): string {
    // Implementar la lógica para convertir num a números mayas
    // No tengo el algoritmo específico, pero sería algo similar a las otras conversiones
    return '';
  }

  convertirADecimalDesdeMaya(maya: string): string {
    // Implementar la lógica para convertir números mayas a decimal
    // Esto dependerá de cómo estén representados los números mayas en tu aplicación
    return '';
  }

  toggleInfo(system: 'decimal' | 'binario' | 'octal' | 'hexadecimal' | 'maya') {
    this.showInfoCard = true; // Mostrar la tarjeta de información

    switch (system) {
      case 'decimal':
        this.cardTitle = 'Paso a paso de la conversión';
        this.cardContent = this.generateConversionStepsInfo(this.conversionSteps1, this.binario);
        break;
      case 'binario':
        this.cardTitle = 'Paso a paso de la conversión';
        this.cardContent = this.generateConversionStepsInfo(this.conversionSteps2, this.decimal);
        break;
      case 'octal':
        this.cardTitle = 'Paso a paso de la conversión';
        this.cardContent = this.generateConversionStepsInfo(this.conversionSteps3, this.octal);
        break;
      case 'hexadecimal':
        this.cardTitle = 'Paso a paso de la conversión';
        this.cardContent = this.generateConversionStepsInfo(this.conversionSteps5, this.hexadecimal);
        break;
      default:
        break;
    }
  }

  generateConversionStepsInfo(steps: string[], result: string): string {
    let content = `<p><strong>Resultado: ${result}</strong></p><br>`;
    steps.forEach((step, index) => {
      content += `<p><strong>Paso ${index + 1}:</strong> ${step}</p><br>`;
    });
    return content;
  }

  async alertResult(system: 'decimal' | 'binario' | 'octal' | 'hexadecimal' | 'maya') {
    let resultMessage = '';

    switch (system) {
      case 'decimal':
        resultMessage = `El resultado en decimal es ${this.decimal}`;
        break;
      case 'binario':
        resultMessage = `El resultado en binario es ${this.binario}`;
        break;
      case 'octal':
        resultMessage = `El resultado en octal es ${this.octal}`;
        break;
      case 'hexadecimal':
        resultMessage = `El resultado en hexadecimal es ${this.hexadecimal}`;
        break;
      case 'maya':
        resultMessage = `El resultado en maya es ${this.maya}`;
        break;
      default:
        break;
    }

    const alert = await this.alertController.create({
      header: 'Resultado destacado',
      message: resultMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  closeCard() {
    this.showInfoCard = false;
  }
}
