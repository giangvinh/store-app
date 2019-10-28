import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { ProductState } from "../../store/reducers/product.reducer";
import { LoadProducts, LoadProduct } from "../../store/actions/product.actions";
import { IProduct } from "../../store/models/product.model";
import { selectAllProducts } from "../../store/selectors/product.selector";
// import { getProductById } from "../../../core/selectors/router.selector";

@Component({
  selector: "app-product-container",
  templateUrl: "./product-container.component.html",
  styleUrls: ["./product-container.component.scss"]
})
export class ProductContainerComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public isMobile: boolean;

  constructor(private store: Store<ProductState>) {}

  ngOnInit() {
    this.store.dispatch(LoadProducts());
    this.products$ = this.store.pipe(select(selectAllProducts));
    this.isMobile = this.detectmob();
  }

  // goToDetail(productId: number) {
  //   this.store.dispatch(LoadProduct({ productId }));
  // }

  filterClickEvent() {}

  detectmob() {
    debugger;

    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
