import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'https://60f0d74438ecdf0017b0f93d.mockapi.io/product'
  constructor(private http: HttpClient) {
    
  }
}
