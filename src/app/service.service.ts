import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getcategories():Observable<string[]>{
    return this.http.get<string[]>(`https://fakestoreapi.com/products/categories`)
    
    }
    getproducts():Observable<any[]>{
      return this.http.get<any[]>(`https://fakestoreapi.com/products`)
    }
    
    
  
    }
    
