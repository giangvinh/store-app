import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { map, catchError, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";

import { ProductService } from "../services/product.service";
import * as ProductActions from "../actions/product.actions";
import { IProduct } from "../models/product.model";

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService, private router: Router) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LoadProducts),
      switchMap(_ => {
        return this.productService
          .getProducts()
          .pipe(
            map(
              (products: IProduct[]) => ProductActions.LoadProductsSuccess({ products }),
              catchError(errors => of(ProductActions.LoadProductsFail(errors)))
            )
          );
      })
    )
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.LoadProduct),
      switchMap(action => {
        return this.productService
          .getProduct(action.productId)
          .pipe(
            map(
              (product: IProduct) => ProductActions.LoadProductSuccess({ product }),
              catchError(errors => of(ProductActions.LoadProductFail(errors)))
            )
          );
      })
    )
  );

  getProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.LoadProductSuccess),
        tap(_ => this.router.navigate(["products/details"]))
      ),
    { dispatch: false }
  );
}
