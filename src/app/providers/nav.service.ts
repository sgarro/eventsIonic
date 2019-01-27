import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private _object: any;
  set object(object: any){
    this._object = object;
  }
  get object(){
    const tmp: any = this._object;
    this._object = undefined;
    return tmp;
  }
}
