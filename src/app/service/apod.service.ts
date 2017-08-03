import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ApodService {
    baseUrl: any;

    constructor(private http: Http) {
        this.http = http;
        this.baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=Bvu3BqIhjxQb8u6UKZWs4diWztWVMc9zkCsEsHhl';
    }

    getApod() {
        return this.http.get(this.baseUrl).map(res => res.json());
    }
}

