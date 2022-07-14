import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
const baseUrl = 'http://localhost:80800/category'

/*
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}/all`);
  }


  create(data: Category): Observable<any> {
    return this.http.post<Category>(baseUrl, data);
  }
/*
  category:Category[] = [
    {
      category_id:1,
      category_name:'Other'
       
    },
    {
      category_id:2,
      category_name:'Sale'
       
    },
    {
      category_id:3,
      category_name:'Promotion'
    }
  ]

  constructor() { }


  public getCategories(): any {
    const categoryObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.category);
      }, 10000);
    });

    return categoryObservable;
  }
  */
}

