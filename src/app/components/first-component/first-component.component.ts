import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name: string = 'Cleisson';
  age: number = 30;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'Polo',
    year: 2019,
  };
}
