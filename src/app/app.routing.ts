import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products",
    loadChildren: () =>
      import("./features/product/product.module").then(p => p.ProductModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(p => p.AuthModule)
  }
];
