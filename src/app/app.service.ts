import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    configUrl = 'https://api.openaq.org/v1/countries';

    getConfig() {
        return this.http.get(this.configUrl);
      }
}