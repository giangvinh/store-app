import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_FEATURE } from 'src/app/core/models/store.key.model';

import { ProductState } from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<ProductState>(
  PRODUCT_FEATURE.storekey
);

export const selectProductsEntities = createSelector(
  selectProductState,
  products => products.entities // object look up
);

export const selectAllProducts = createSelector(
  selectProductsEntities,
  products => Object.keys(products).map(key => products[key]) // use *ngFor
);

export const selectedProduct = createSelector(
  selectProductState,
  state => state.selectedProduct
);

export const selectedProductById = (id: number) =>
  createSelector(
    selectProductState,
    state => state.entities[id]
  );
