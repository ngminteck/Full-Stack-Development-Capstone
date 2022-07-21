import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-catergory-form',
  templateUrl: './catergory-form.component.html',
  styleUrls: ['./catergory-form.component.css']
})
export class CatergoryFormComponent implements OnInit {

  catModel: Category = new Category();

  constructor() { 
     
  }

  ngOnInit(): void {
    
      
  }
  onAddNewCategory(f: any)
  {
    axios.post("http://localhost:8080/category/create",{
      categoryName:this.catModel.categoryName,
      categoryId:this.catModel.categoryId
      
    }).then(function (response) 
    {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   

  }

}
