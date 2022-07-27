import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../interfaces/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit ?: number, offset ?: number): Observable<Product[]> {
    //return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
    let params = new HttpParams();
    if(limit != undefined && offset != undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httpClient.get<Product[]>(this.apiUrl, { params });
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: CreateProductDTO): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  update(id: string, dto: UpdateProductDTO): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  getProductsByPage(limit: number, offset: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    });
  }

}
