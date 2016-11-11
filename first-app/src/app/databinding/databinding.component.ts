import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
        .redBorder { border: 1px solid red;
              height: 30px;}
`]
})
export class DatabindingComponent implements OnInit {
    stringIntrop = 'This is a string intropolation';
    numIntrop = 'This is a number intropolation';
  constructor() { }

  ngOnInit() {
  }
  clickeroo(value: string) {
      alert(value);
  }
}
