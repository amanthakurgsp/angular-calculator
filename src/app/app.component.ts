import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-calculator';

  calValue: number = 0;
  funcT: any = 'noFunction';

  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any): void {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string): void {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string): void {
    if (val == 'c') {
      this.clearAll();
    } else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT != 'noFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string): void {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValue(total, val);
    }
    if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValue(total, val);
    }
    if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValue(total, val);
      if (this.funcT == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValue(total, val);
    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValue(total, val);
    }
  }

  totalAssignValue(total: number, val: string): void {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') {
      this.onEqualPress();
    }
  }

  onEqualPress(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }

  clearAll(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue';
  }
}
