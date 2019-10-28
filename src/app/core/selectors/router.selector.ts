import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import { getSelectors } from "@ngrx/router-store";

import { State } from "../reducers";
import { selectPostsEntities } from "src/app/features/post/store/selectors/post.selector";

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>("router");

export const getPostById = createSelector(
  selectPostsEntities,
  selectRouter,
  (postEntities, router) => {
    return router.state && postEntities[router.navigationId];
  }
);

const {
  selectQueryParams, // select the current route query params
  selectRouteParams, // select the current route params
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);
