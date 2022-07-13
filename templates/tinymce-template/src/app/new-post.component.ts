import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgForm } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  categoryGroup = [ 
              {id: 1, name: "Category 1" },
              {id: 2, name: "Category 2" },
              {id: 3, name: "Category 3" }
            ];
  

 
  model: Post = new Post();
  postId:number = 0;
 

  constructor() 
  { 
    
  }

  ngOnInit(): void {
   
  }

  onSubmit(f: any){
    
    this.model.title = this.model.header;
    this.model.lastEditDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.model.lastEditUser = 1;
    this.model.isApproved = false;
    
    console.log(this.model);

  }
}

export class Post
{
  postId:number | undefined;
  title:string | undefined;
  header:string | undefined;
  content:string | undefined;
  lastEditDate:string | undefined;
  expireDate:string | undefined;
  category:number | undefined;
  lastEditUser:number | undefined;
  isApproved:boolean |undefined;
  

  constructor() 
  {
    this.postId = 0;
    this.header = "My Title";
    this.title = this.header;
    this.content = "My Content";
    this.lastEditDate = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    let date = new Date();
    this.expireDate = formatDate(date.setDate(date.getDate() + 30), 'yyyy-MM-dd', 'en_US');
    this.category = 1;
    this.lastEditUser = 1;
    this.isApproved = false;

  }

  

}



