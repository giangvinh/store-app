import { createAction, props } from "@ngrx/store";
import { Update } from "@ngrx/entity";

import { IProduct } from "../models/product.model";

export enum ProductActionTypes {
  LoadProducts = "[Product] Load Products",
  LoadProductsSuccess = "[Product] Load Products Success",
  LoadProductsFail = "[Product] Load Products Fail",
  LoadProduct = "[Product] Load Product",
  LoadProductSuccess = "[Product] Load Product Success",
  LoadProductFail = "[Product] Load Product Fail",
  UpdateProduct = "[Product] Update Product",
  UpdateProductFail = "[Product] Update Product Fail",
  UpdateSelectedProduct = "[Product] Update Selected Product"
}

export const LoadProducts = createAction(ProductActionTypes.LoadProducts);
export const LoadProductsSuccess = createAction(
  ProductActionTypes.LoadProductsSuccess,
  props<{ products: IProduct[] }>()
);
export const LoadProductsFail = createAction(ProductActionTypes.LoadProductsFail, props<{ errors: any }>());

export const LoadProduct = createAction(ProductActionTypes.LoadProduct, props<{ productId: number }>());
export const LoadProductSuccess = createAction(
  ProductActionTypes.LoadProductSuccess,
  props<{ product: IProduct }>()
);
export const LoadProductFail = createAction(ProductActionTypes.LoadProductFail, props<{ errors: any }>());

export const UpdateProduct = createAction(
  ProductActionTypes.UpdateProduct,
  props<{ product: Update<IProduct> }>()
);
export const UpdateSelectedProduct = createAction(
  ProductActionTypes.UpdateSelectedProduct,
  props<{ selectedProduct: IProduct }>()
);
export const UpdateProductFail = createAction(ProductActionTypes.UpdateProductFail, props<{ errors: any }>());

// Invalid: action type doesn't follow the "[Source] Event" convention
// const loadCustomers = createAction('Load Customers')

/* const loadCustomers = createAction("[Customers Page] Load Customers");
const createCustomer = createAction(
  "[Customers Page] Load Customers",
  props<{ customer: Customer }>()
); */
