import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  category = [ 
              {id: 1, name: "Category 1" },
              {id: 2, name: "Category 2" },
              {id: 3, name: "Category 3" }
            ];

  constructor() { }

  ngOnInit(): void {
  }

}


