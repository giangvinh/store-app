import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POST_FEATURE } from 'src/app/core/models/store.key.model';

import { PostState } from '../reducers/post.reducer';

export const selectPostState = createFeatureSelector<PostState>(
  POST_FEATURE.storekey
);

export const selectPostsEntities = createSelector(
  selectPostState,
  posts => posts.entities //object look up
);

export const selectAllPosts = createSelector(
  selectPostsEntities,
  posts => Object.keys(posts).map(key => posts[key]) // use *ngFor
);

export const selectedPost = createSelector(
  selectPostState,
  state => state.selectedPost
);

export const selectedPostById = (id: number) =>
  createSelector(
    selectPostState,
    state => state.entities[id]
  );
