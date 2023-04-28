import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdukService {
  private readonly apiUrl: string = 'https://dummyjson.com/products'
  constructor(private http: HttpClient) { }

  getProduk(limit: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?limit=${limit}`)
  }
  getProdukDetail(id: string ): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
  getProdukCari(q: any ): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${q}`)
  }
  
}
