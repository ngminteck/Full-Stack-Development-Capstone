import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  categoryGroup = [ 
    {id: 1, name: "Category 1" },
    {id: 2, name: "Category 2" },
    {id: 3, name: "Category 3" }
  ];



 model: Post = new Post();
 postId:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: any){
    
    this.model.title = this.model.header;
    this.model.post_date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.model.user_id = 1;
    this.model.is_approved = false;
    
    console.log(this.model);

  }
}

export class Post
{
  post_id:number | undefined;
  title:string | undefined;
  header:string | undefined;
  content:string | undefined;
  post_date:string | undefined;
  expiry_date:string | undefined;
  category_id:number | undefined;
  user_id:number | undefined;
  is_approved:boolean |undefined;
  

  constructor() 
  {
    this.post_id = 0;
    this.header = "My Title";
    this.title = this.header;
    this.content = "My Content";
    this.post_date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    let date = new Date();
    this.expiry_date = formatDate(date.setDate(date.getDate() + 30), 'yyyy-MM-dd', 'en_US');
    this.category_id = 1;
    this.user_id = 1;
    this.is_approved = false;

  }

}
