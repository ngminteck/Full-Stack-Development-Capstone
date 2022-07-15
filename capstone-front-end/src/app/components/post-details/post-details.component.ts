import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
      this.getPost();
  }

  getPost(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.get(postId).subscribe(post => this.post = post);
  }

  // posts?: Post[];
  // currPost: Post = {};
  // currIdx = -1;
  // category = '';

  // constructor(private postService: PostService) { }

  // ngOnInit(): void {
  //   this.getPosts();
  // }

  // getPosts(): void {
  //   this.postService.getApproved()
  //     .subscribe({
  //       next: (data) => {
  //           this.posts = data;
  //           console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // refreshPosts(): void {
  //   this.getPosts();
  //   this.currPost = {};
  //   this.currIdx = -1;
  // }

  // searchCategory(): void {
  //   this.currPost = {};
  //   this.currIdx = -1;

  //   this.postService.findByCategory(this.category)
  //     .subscribe({
  //       next: (data) => {
  //         this.posts = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

}
