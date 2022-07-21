import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const fake_category = [
      {
          id:1,
          name:'Promotion'
         
      },
      {
          id:2,
          name:'Discount'
         
      },
      {
          id:3,
          name:'Sale'
      }
    ];
    return {fake_category};
    }
}
