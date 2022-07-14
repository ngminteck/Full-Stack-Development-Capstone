import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post, Post2 } from 'src/app/models/post.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 model: Post2 = new Post2();
 catModel :Category = new Category();
 categories:Array<Category> = new Array<Category>();
 postId:number = 0;


  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.UpdateCategory()
      
  }

  onAddNewCategory(f: any)
  {
    this.catModel.category_id = 0;

    this.UpdateCategory();

  }

  UpdateCategory()
  {
    const categoriesObservable = this.categoryservice.getCategories();
    categoriesObservable.subscribe((categoriesData: Category[]) => {
          this.categories = categoriesData;
      });
  }

  onSubmit(f: any){
    
    this.model.title = this.model.header;
    this.model.post_date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.model.user_id = 1;
    this.model.is_approved = false;
    
    console.log(this.model);

  }
}
