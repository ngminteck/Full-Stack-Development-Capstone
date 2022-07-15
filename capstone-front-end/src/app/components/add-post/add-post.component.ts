import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post, Post2 } from 'src/app/models/post.model';
import { CategoryService } from 'src/app/services/category.service';
import axios from 'axios';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 model: Post2 = new Post2();
 catModel :Category = new Category();
 categories:Category[] = [];
 postId:number = 0;


  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.UpdateCategory()
      
  }

  onAddNewCategory(f: any)
  {
    this.catModel.categoryId = 0;
    this.categoryservice.create(this.catModel);
    this.UpdateCategory();

  }

  UpdateCategory()
  {
    // TODO fix this error, response is not showing up
    // const categoriesObservable = this.categoryservice.getAll();
    // categoriesObservable.subscribe((categoriesData: Category[]) => {
    //       this.categories = categoriesData;
    //       console.log(categoriesData);
    //   });

    axios.get("http://localhost:8080/category/all")
    .then((response)=>{
      this.categories = response.data;
    })
    .catch((err)=>{
      console.log(err); 
    })
  }

  onSubmit(f: any){
    
    this.model.title = this.model.header;
    this.model.post_date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.model.user_id = 1;
    this.model.is_approved = false;
    
    console.log(this.model);

  }
}
