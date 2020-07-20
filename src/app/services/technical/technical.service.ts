import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  public setObjectInSessionStorage = this._setObjectInSessionStorage;
  public getObjectInSessionStorage = this._getObjectInSessionStorage;

  
  constructor() { }

  private _setObjectInSessionStorage(p_key:string ,p_object: any): void {
    sessionStorage.setItem(p_key, p_object);
  }

  private _getObjectInSessionStorage(p_key:string): any {
    return sessionStorage.getItem(p_key)
  }
}
