import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private postService : PostsService,
  			  private router : Router) { }

  ngOnInit() {
  	this.initForm();
  }


  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
}


	 onSubmitForm() {
	    const formValue = this.postForm.value;
	    this.postService.addPost(formValue['title'],formValue['content']);
	    this.router.navigate(['/posts']);
	  }

}
