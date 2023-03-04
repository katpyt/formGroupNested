import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityModel, CountryModel, OrderProductModel } from '../models/order.model';

@Injectable({ providedIn: 'root' })
    
    
export class OrderService {
  constructor(private _httpClient: HttpClient) {
  }
    
    getAllProducts(): Observable<OrderProductModel[]> {
    return this._httpClient.get<OrderProductModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }
    
  getAllCities(): Observable<CityModel[]> {
    return this._httpClient.get<CityModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cities');
    }  
  
  getAllCountries(): Observable<CountryModel[]> {
    return this._httpClient.get<CountryModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries');
    }   
}
