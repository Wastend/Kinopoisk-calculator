import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'

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
  public firstNumber: number = 0;
  public secondNumber: number = 0;

  public operation: string = '+';

  public operations: string[] = ['+','-','*','/']

  public result: number | undefined;

  public culc(){
    switch(this.operation){
      case '+': this.result = this.firstNumber + this.secondNumber; break;
      case '-': this.result = this.firstNumber - this.secondNumber; break;
      case '*': this.result = this.firstNumber * this.secondNumber; break;
      case '/': this.result = this.firstNumber / this.secondNumber; break;
    }
  }

}
