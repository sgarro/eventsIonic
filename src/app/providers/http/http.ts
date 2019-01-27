import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';

import {HttpAngularProvider} from './http-angular';
import {HttpNativeProvider} from './http-native';

@Injectable()
export class HttpProvider {
    private http: HttpNativeProvider | HttpAngularProvider;

    constructor(private platform: Platform, private angularHttp: HttpAngularProvider, private nativeHttp: HttpNativeProvider) {
        this.http = this.platform.is('ios') || this.platform.is('android') ? this.nativeHttp : this.angularHttp;
    }

    public get(url, params?, options?) {
        return this.http.get(url, params, options);
      }

}