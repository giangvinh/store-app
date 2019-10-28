import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PRODUCT_FEATURE } from 'src/app/core/models/store.key.model';

import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductComponent } from './components/product/product.component';
import { productRoutes } from './product.routing';
import { ProductEffects } from './store/effects/product.effects';
import { productReducer } from './store/reducers/product.reducer';
import { ProductService } from './store/services/product.service';

// import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
@NgModule({
  declarations: [ProductContainerComponent, ProductComponent],
  providers: [ProductService],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    HttpClientModule,
    StoreModule.forFeature(PRODUCT_FEATURE.storekey, productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {}
