import {Injectable} from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

import {Observable} from 'rxjs/Observable';
import { from } from 'rxjs';
@Injectable()
export class HttpNativeProvider {
    constructor(public http: HTTP) {}

    public get(url: string, params?: any, options: any = {}) {
        let responseData = this.http.get(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return from(responseData);
    }

}