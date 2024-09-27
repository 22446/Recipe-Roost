import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _httpClient=inject(HttpClient)
  GetAllMeals():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/v1/1/search.php?s=`)
  }
  GetAllMealsDetails(id:string|null):Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/v1/1/lookup.php?i=${id}`)
  }

}
