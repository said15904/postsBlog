import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
	postsSubject = new Subject<any[]>();
	private posts = [
		{
		  id : 1,		
		  title: 'Mon premier post',
		  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel arcu vitae metus scelerisque lacinia. Aliquam dapibus ornare volutpat. Donec mauris felis, suscipit a placerat mollis, volutpat id erat. Sed eget felis ligula. Nullam non vehicula enim. Nulla ut efficitur justo. Duis eleifend turpis neque, eget facilisis ligula aliquam id. Nam vel lacinia libero.',
		  loveIts: 0,
		  created_at: new Date()
		},
		{
		  id : 2,	
		  title: 'Mon deuxième post',
		  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel arcu vitae metus scelerisque lacinia. Aliquam dapibus ornare volutpat. Donec mauris felis, suscipit a placerat mollis, volutpat id erat. Sed eget felis ligula. Nullam non vehicula enim. Nulla ut efficitur justo. Duis eleifend turpis neque, eget facilisis ligula aliquam id. Nam vel lacinia libero.',
		  loveIts: 0,
		  created_at: new Date()
		},
		{
		  id : 3,	
		  title: 'Encore un post',
		  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel arcu vitae metus scelerisque lacinia. Aliquam dapibus ornare volutpat. Donec mauris felis, suscipit a placerat mollis, volutpat id erat. Sed eget felis ligula. Nullam non vehicula enim. Nulla ut efficitur justo. Duis eleifend turpis neque, eget facilisis ligula aliquam id. Nam vel lacinia libero.',
		  loveIts: 0,
		  created_at: new Date()
		},
	];
  constructor() { }


  addPost(title: string, content: string) {
    const postObject = {
      id : 0,
      title: '',
      content: '',
      loveIts : 0,
      created_at: new Date()
    };
    postObject.id = this.posts[(this.posts.length -1)].id +1;
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPostSubject();
}

 removePost(id: number) {
    const postIndexToRemove = this.posts.findIndex(
      (post) => {
        if(post.id === id) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPostSubject();
  }

  like(id: number) {
  	const postIndex = this.posts.findIndex(
      (post) => {
        if(post.id === id) {
          return true;
        }
      }
    );
    this.posts[postIndex].loveIts=this.posts[postIndex].loveIts+1;
    this.emitPostSubject();
  }

  dislike(id: number) {
  	const postIndex = this.posts.findIndex(
      (post) => {
        if(post.id === id) {
          return true;
        }
      }
    );
    this.posts[postIndex].loveIts=this.posts[postIndex].loveIts-1;
    this.emitPostSubject();
  }


  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

	
}
