import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadPost, LoadPosts } from '../../store/actions/post.actions';
import { IPost } from '../../store/models/post.model';
import { PostState } from '../../store/reducers/post.reducer';
import { selectAllPosts } from '../../store/selectors/post.selector';

@Component({
  selector: "app-post-container",
  templateUrl: "./post-container.component.html",
  styleUrls: ["./post-container.component.scss"]
})
export class PostContainerComponent implements OnInit {
  public posts$: Observable<IPost[]>;

  constructor(private store: Store<PostState>) {}

  ngOnInit() {
    this.store.dispatch(LoadPosts());
    this.posts$ = this.store.pipe(select(selectAllPosts));
  }

  goToDetail(postId: number) {
    this.store.dispatch(LoadPost({ postId }));
  }
}
