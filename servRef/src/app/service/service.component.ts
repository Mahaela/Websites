import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent  {

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

    onSend(value: string) {
        this.dataService.pushData(value);
    }

}
