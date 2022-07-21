import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  model: Post = new Post();
  categories:Category[] = [];
  postId:number = 0;
 
 
   constructor() { 
     
   }
 
   ngOnInit(): void {
     this.onGetAllCategory()
       
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
