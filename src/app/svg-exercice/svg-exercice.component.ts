import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-svg-exercice',
  templateUrl: './svg-exercice.component.html',
  styleUrls: ['./svg-exercice.component.css'],
})
export class SvgExerciceComponent implements OnInit {
  numberInput = new FormControl(0, [Validators.required, Validators.min(0)]);
  numbers: number[] = [];
  constructor() {}

  ngOnInit() {}

  generateNumbers() {
    this.numbers = [];
    const { value } = this.numberInput;
    for (let i = 0; i < value; i++) {
      this.numbers.push(this.getRandomInt(-100, 100));
    }
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  calculateWidth() {
    return this.numbers.length * 15 + (this.numbers.length - 1) * 10;
  }

  generateViewBox() {
    const width = this.calculateWidth();
    return `0 0 ${width} 15`;
  }

  calculateRectX(index: number) {
    if (index === 0) {
      return `0`;
    } else {
      return `${index * 25} `;
    }
  }

  generateColor(index: number) {
    const num = this.numbers[index];
    const decimal = Math.floor((Math.abs(num) * 255) / 100);
    const hexaDecimal =
      decimal.toString(16).length < 2
        ? `0${decimal.toString(16)}`
        : decimal.toString(16);
    if (num >= 0) {
      return `#${hexaDecimal}0000`;
    } else {
      return `#00${hexaDecimal}00`;
    }
  }
}
