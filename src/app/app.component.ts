import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
	posts: any[];
	postSubscription: Subscription;
	constructor(private postService: PostsService) {

	}

	ngOnInit() {
		this.postSubscription = this.postService.postsSubject.subscribe(
			(posts : any[]) => {
				this.posts = posts;
			});
		this.postService.emitPostSubject();
	}



	ngOnDestroy() {
	    this.postSubscription.unsubscribe();
	}


  
}
	