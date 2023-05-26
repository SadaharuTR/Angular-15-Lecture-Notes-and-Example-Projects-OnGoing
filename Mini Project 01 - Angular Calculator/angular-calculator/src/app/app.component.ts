import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  calValue: number = 0;
  functT: any = 'NoFunction';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue (val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    }
    else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    }
    else{
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string){

    if (this.functT == 'c'){
      this.clearAll();
    }

    else if(this.functT == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0
      this.calNumber = 'noValue'
      this.functT = val;
    }
    else if (this.functT != 'NoFunction'){
      this.secondNumber = this.calValue;
      //calculation part
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if(this.functT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
      if(val == '='){
        this.onEqualPress();
      }
    }
    if(this.functT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
      if(val == '='){
        this.onEqualPress();
      }
    }
    if(this.functT == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, val);
      if(val == '='){
        this.onEqualPress();
      }
    }
    if(this.functT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, val);
      if(val == '='){
        this.onEqualPress();
      }
    }
    if(this.functT == '%') {
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(Total, val);
      if(val == '='){
        this.onEqualPress();
      }
    }
  }

  totalAssignValues(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.functT = val;
  }

  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.functT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.functT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}
