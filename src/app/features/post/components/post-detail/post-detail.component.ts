import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPostById } from 'src/app/core/selectors/router.selector';

import { UpdatePost, UpdateSelectedPost } from '../../store/actions/post.actions';
import { IPost } from '../../store/models/post.model';
import { PostState } from '../../store/reducers/post.reducer';

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"]
})
export class PostDetailComponent implements OnInit {
  public post$: Observable<IPost>;
  @ViewChild("id", { static: false }) id: ElementRef;
  @ViewChild("title", { static: false }) title: ElementRef;
  @ViewChild("body", { static: false }) body: ElementRef;
  @ViewChild("userId", { static: false }) userId: ElementRef;

  constructor(private store: Store<PostState>) {}

  ngOnInit() {
    this.post$ = this.store.pipe(select(getPostById));
  }

  public onSubmit(event) {
    event.preventDefault();
    const post = {
      id: this.id.nativeElement.value,
      changes: {
        title: this.title.nativeElement.value,
        body: this.body.nativeElement.value
      }
    };

    const selectedPost = {
      id: this.id.nativeElement.value,
      userId: this.userId.nativeElement.value,
      title: this.title.nativeElement.value,
      body: this.body.nativeElement.value
    };

    this.store.dispatch(UpdatePost({ post }));
    this.store.dispatch(UpdateSelectedPost({ selectedPost }));
  }
}
