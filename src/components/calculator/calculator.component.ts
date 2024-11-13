import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'

interface ICalc {
  result: number;
  value: number | null;
  operation: CalcOperations
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multyply = '*',
  devide = '/',
  null = ''
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  public calcGroup: ICalc = {
    result: 0,
    value: null,
    operation: CalcOperations.plus
  }

  public calcOperations = CalcOperations;

  public calcEvent (event: CalcOperations) {
    if(this.calcGroup.value !== null){
      switch(event){
            case CalcOperations.plus: this.calcGroup.result = Number((this.calcGroup.result + this.calcGroup.value).toFixed(2)); break;
            case CalcOperations.minus: this.calcGroup.result = Number((this.calcGroup.result - this.calcGroup.value).toFixed(2)); break;
            case CalcOperations.multyply: this.calcGroup.result = Number((this.calcGroup.result * this.calcGroup.value).toFixed(2)); break;
            case CalcOperations.devide: this.calcGroup.result = Number((this.calcGroup.result / this.calcGroup.value).toFixed(2)); break;
          }
    }
  }

  // public calcOperations = CalcOperations;
  // public calcModifiers = CalcModifiers;
  // public calcGroups: CalcGroup[] = [
  //   {
  //     firstNumber: {
  //       value: 0,
  //       modificator: CalcModifiers.none
  //     },
  //     secondNumber: {
  //       value: 0,
  //       modificator: CalcModifiers.none
  //     },
  //     operation: CalcOperations.plus,
  //   }
  // ];
  //
  // public history: string[] = [];
  //
  // public operationsBetweenGroups: CalcOperations[] = [];
  //
  // public result: number | undefined;
  //
  // public addGroup():void {
  //   this.calcGroups.push({
  //     firstNumber: {
  //       value: 0,
  //       modificator: CalcModifiers.none
  //     },
  //     secondNumber: {
  //       value: 0,
  //       modificator: CalcModifiers.none
  //     },
  //     operation: CalcOperations.plus
  //   })
  // }
  //
  // public removeGroup(index:number):void {
  //     this.calcGroups.splice(index, 1);
  // }
  //
  // public calc(){
  //   // switch(calcGroup.operation){
  //   //   case '+': this.result = this.firstNumber + this.secondNumber; break;
  //   //   case '-': this.result = this.firstNumber - this.secondNumber; break;
  //   //   case '*': this.result = this.firstNumber * this.secondNumber; break;
  //   //   case '/': this.result = this.firstNumber / this.secondNumber; break;
  //   // }
  // }

  protected readonly CalcOperations = CalcOperations;
}
