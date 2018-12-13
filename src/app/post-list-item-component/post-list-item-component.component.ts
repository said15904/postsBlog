import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() id: number;
	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() created_at: Date;

  constructor(private postService : PostsService) { }

  ngOnInit() {
  }

	loveIt() {
		this.postService.like(this.id);
	}

	hateIt() {
		this.postService.dislike(this.id);
	}

	deletePost(){
		this.postService.removePost(this.id);
	}

	
}
