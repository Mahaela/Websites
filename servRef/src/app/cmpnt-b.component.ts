import { Component, OnInit } from '@angular/core';
import { LogService} from './log.service';
import { DataService } from './data.service';
@Component({
  selector: 'app-cmpnt-b',
  templateUrl: './cmpnt-b.component.html',
  styleUrls: ['./cmpnt-b.component.css'],
})
export class CmpntBComponent implements OnInit {

  value = '';
    items: string[] = [];
    constructor(private logService: LogService, private dataService: DataService) { }

    onLog(value: string) {
        this.logService.writeToLog(value);
    }

    onStore(value: string) {
        this.dataService.addData(value);
    }

    onGet() {
        this.items = this.dataService.getData();
    }

    ngOnInit() {
        this.dataService.dataPush.subscribe(data => this.value = data);
    }
}
