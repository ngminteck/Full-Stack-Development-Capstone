
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
 
  catModel: Category = new Category();
  model: Post = new Post();
  categories:Category[] = [];
  buttonText:String | undefined 

  tmpPostid:number = 0;

  constructor() { 
    this.onGetAllCategory();

    this.model.postId = this.tmpPostid;
    // tmpPostid need to be constructor parameter
    // create
    if(this.tmpPostid<= 0)
    {
        this.buttonText = "Create Post";
    }
    // edit
    else
    {
        this.buttonText = "Update Post";
        this.onGetPostInfo;
    }



     



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

  onGetPostInfo()
  {
    
  }

  onSubmit(f: any){
    
    this.model.title = this.model.header;
    this.model.postDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.model.userId = 1;
    this.model.isApproved = false;
    
    console.log(this.model);

    

  }

  
}
