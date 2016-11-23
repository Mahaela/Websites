import { LogService } from './log.service.ts'
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class DataService {
    dataPush = new EventEmitter<string>();

    private data: string[] = [];

    constructor(private logService: LogService) {

    }
    addData(input: string) {
        this.data.push(input);
        this.logService.writeToLog('Saved item: ' + input);
    }

    getData() {
        return this.data;
    }

    pushData(value: string) {
        this.dataPush.emit(value);
    }
}
