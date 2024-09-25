import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {  
  private _httpClient=inject(HttpClient)
  getAllCategories():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/v1/1/categories.php`)
  }
  getAllCategoriesbyName(name:string|null):Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/v1/1/search.php?s=${name}`)
  }
}
