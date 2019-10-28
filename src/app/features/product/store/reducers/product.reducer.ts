import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter, Update } from "@ngrx/entity";

import * as ProductActions from "../actions/product.actions";

import { IProduct } from "../models/product.model";

export interface ProductState extends EntityState<IProduct> {
  selectedProduct: IProduct;
  errors: any;
}

const productAdapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

const initialState: ProductState = productAdapter.getInitialState({
  selectedProduct: null,
  errors: null
});

export const productReducer = createReducer(
  initialState,
  on(ProductActions.LoadProductsSuccess, (state, { products }) => productAdapter.addAll(products, state)),
  on(ProductActions.LoadProductSuccess, (state, { product }) => {
    return productAdapter.addOne(product, { ...state, selectedProduct: product });
  }),
  on(ProductActions.UpdateProduct, (state, { product }) => {
    return productAdapter.updateOne(product, state);
    // return productAdapter.updateOne(product, { ...state, selectedProduct: product });
  }),
  on(ProductActions.UpdateSelectedProduct, (state, { selectedProduct }) => {
    console.log(selectedProduct);
    return { ...state, selectedProduct };
  }),

  // catch errors
  on(
    ProductActions.LoadProductsFail,
    ProductActions.LoadProductFail,
    ProductActions.UpdateProductFail,
    (state, { errors }) => {
      return { ...state, errors };
    }
  )
);

export const { selectAll } = productAdapter.getSelectors();
