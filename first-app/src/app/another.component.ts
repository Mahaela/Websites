import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <div>
        <ng-content></ng-content>
    </div>
  `,
  styles: [`
        div { border: 1px solid black;
              height: 30px;}
`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
