import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-databinding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `,

})
export class TwoWayDatabindingComponent {

    person = {
        name: 'Max',
        age: 27
    };
}
