import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() post: Post = <Post>{};

  constructor(
            ) { }

  ngOnInit(): void {
  }

  // ngOnInit(): void {
  //   this.post$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) =>
  //       this.postService.get(parseInt(params.get('id')!)))
  //   );
  // }

  // goToPost(post: Post) {
  //   const postId = post ? post.postId : null;
  //   this.router.navigate(['/post', { postId: postId }]);
  // }

}
