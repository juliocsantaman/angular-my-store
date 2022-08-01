import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../interfaces/product.model';
import { catchError, Observable, throwError, map, zip} from 'rxjs';
import { checkTime } from 'src/app/interceptors/time-interceptor/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/products';
  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  getByCategory(categoryId: string, limit ?: number, offset ?: number): Observable<Product[]> {
    let params = new HttpParams();
    if(limit != undefined && offset != undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httpClient.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`, { params });
  }

  getAllProducts(limit ?: number, offset ?: number): Observable<Product[]> {
    //return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
    let params = new HttpParams();
    if(limit != undefined && offset != undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`, { params, context: checkTime() })
    .pipe(
      map(products =>  products.map(item => {
        return {
          ...item,
          taxes: .16 * item.price
        }
      }))
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === HttpStatusCode.Conflict) {
          return throwError(() => new Error('Server error.'));
        }

        if(error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error('Product does not exist.'));
        }

        if(error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => new Error('Unauthorized.'));
        }

        return throwError(() => new Error('There is an error.'));

      })
    )
  }

  fetchReadAndUpdate(id: string, dto: UpdateProductDTO) {
    return zip(
      this.getProduct(id),
      this.update(id, {title: 'New title'})
    );
  }

  create(product: CreateProductDTO): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiUrl}/products`, product);
  }

  update(id: string, dto: UpdateProductDTO): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiUrl}/products/${id}`, dto);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/products/${id}`);
  }

  getProductsByPage(limit: number, offset: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`, {
      params: { limit, offset }
    });
  }

}
