import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  
})
export class HomeComponentComponent  implements OnDestroy{
	private subscription: Subscription;
	param: string;
  constructor(private route: ActivatedRoute) {
      this.subscription = this.route.queryParams.subscribe(
          queryParam => this.param = queryParam['analytics']
      );
    }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  };
}
