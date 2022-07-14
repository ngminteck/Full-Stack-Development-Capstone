import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /*private categorylistUrl = 'api/students';  // URL to web api ???

  //DI in nagular
  constructor(
      private http: HttpClient) 
  { }

  ngOnInit(){
    this.getCategoryList();
  }

  getCategoryList (): Observable<Category[]> {
    return this.http.get<Category[]>(this.categorylistUrl);
  }*/

  category:Category[] = [
    {
      category_id:1,
      category_name:'Promotion'
       
    },
    {
      category_id:2,
      category_name:'Discount'
       
    },
    {
      category_id:3,
      category_name:'Sale'
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
}

