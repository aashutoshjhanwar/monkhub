import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductList } from '../feature.interface';
import { environment } from '../../../../environments/environment';
import { homeDirectory } from '../../../shared/constants/url.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = `${environment.apiUrl}`;
 
  constructor(private http: HttpClient) { 
    
  }


  GetProductList(): Observable<IProductList[]> {
    let url_ =
      `${this.baseUrl}/${homeDirectory.GetProductList}`;
    return this.http.get<IProductList[]>(url_);
  }
}
