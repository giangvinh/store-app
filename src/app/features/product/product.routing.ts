import { Routes } from "@angular/router";
import { ProductContainerComponent } from "./components/product-container/product-container.component";
// import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

export const productRoutes: Routes = [
  { path: "", component: ProductContainerComponent }
  // { path: ":id", component: ProductDetailComponent }
];
