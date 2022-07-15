import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getApproved().subscribe(posts => this.posts = posts);
      // this.posts$ = this.route.paramMap.pipe(
      //   switchMap(params => {
      //     this.selectedId = parseInt(params.get('id')!);
      //     return this.postService.getApproved();
      //   })
      // );
  }

  // ngOnInit(): void {
  //   console.log("All posts");
  //   this.getPosts();  
  // }

  // getPosts(): void {
  //   this.postService.getApproved().subscribe(posts => this.posts = posts);
  // }

  // getPostsByCategory(category: string): void {
  //   this.postService.findByCategory(category).subscribe(posts => this.posts = posts);
  // }

  }
