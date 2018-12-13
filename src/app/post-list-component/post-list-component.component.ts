import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts: any[];
	postSubscription: Subscription;
  constructor(private postService: PostsService) { }

 	ngOnInit() {
		this.postSubscription = this.postService.postsSubject.subscribe(
			(posts : any[]) => {
				this.posts = posts;
			});
		this.postService.emitPostSubject();
	}

}
