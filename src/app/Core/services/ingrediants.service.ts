import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class IngrediantsService {
  private _HttpClient=inject(HttpClient)
  getAllIngrediants():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/v1/1/list.php?i=list`)
  }
  getIngrediantsByName(name:string|null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/v1/1/filter.php?i=${name}`)
    }
}
