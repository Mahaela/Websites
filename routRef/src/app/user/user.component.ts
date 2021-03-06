import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {
    private subscription: Subscription;
    id: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
       this.subscription = activatedRoute.params.subscribe((param: any) => this.id = param['id']);
    }
    onNavigate() {
        this.router.navigate(['/'], { queryParams: { 'analytics': 100 }, fragment: 'section1', preserveQueryParams: true});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
