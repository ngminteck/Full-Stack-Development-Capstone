import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormGroup, FormControl } from '@angular/forms';

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
  

 
  postThread: Array<Post> = new Array;
  postId:number = 0;
 
            
  constructor() { }

  ngOnInit(): void {

  }

  AddPost()
  {
      let newPost = new Post();
      ++this.postId;
      newPost.postId = this.postId;
      newPost.title = (document.getElementById("post-title") as HTMLInputElement).value;
      newPost.content = (document.getElementById("post-content") as HTMLInputElement).value;
      newPost.categoryID = (document.getElementById("post-category") as HTMLInputElement).value;
      newPost.expireDate = new Date(Date.parse((document.getElementById("post-expiredate") as HTMLInputElement).value));
      newPost.editBy = 0;
      newPost.lastUpdateDate = new Date();

      this.postThread.push(newPost);
  }
}

export class Post
{
  postId:number | undefined;
  title:string | undefined ;
  content:string | undefined;
  categoryID:string | undefined;
  expireDate:Date | undefined;
  
  editBy:number | undefined;
  lastUpdateDate:Date | undefined;

}


