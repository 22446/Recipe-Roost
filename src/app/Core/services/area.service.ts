import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private _HttpClient=inject(HttpClient)
  getAllArea():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/v1/1/list.php?a=list`)
  }
  getAreaByName(name:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/v1/1/search.php?s=${name}`)
    }
}
