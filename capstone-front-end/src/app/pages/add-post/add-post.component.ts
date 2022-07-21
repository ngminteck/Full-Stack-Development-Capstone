import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post} from 'src/app/models/post.model';
import axios from 'axios';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 model: Post = new Post();
 catModel :Category = new Category();
 categories:Category[] = [];
 postId:number = 0;


  constructor() { 
    
  }

  ngOnInit(): void {
    this.onGetAllCategory()
      
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
    this.onGetAllCategory();

  }

  onGetAllCategory()
  {
    axios.get("http://localhost:8080/category/get/all")
    .then((response)=>{
      this.categories = response.data;
    })
    .catch((err)=>{
      console.log(err); 
    })
  }

  onSubmit(f: any){
    
    this.model.title = this.model.header;
    this.model.postDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.model.userId = 1;
    this.model.isApproved = false;
    
    console.log(this.model);

  }
}
