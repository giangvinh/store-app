import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { POST_FEATURE } from 'src/app/core/models/store.key.model';

import { PostContainerComponent } from './components/post-container/post-container.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostComponent } from './components/post/post.component';
import { postRoutes } from './post.routing';
import { PostEffects } from './store/effects/post.effects';
import { postReducer } from './store/reducers/post.reducer';
import { PostService } from './store/services/post.service';

@NgModule({
  declarations: [PostContainerComponent, PostDetailComponent, PostComponent],
  providers: [PostService],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    HttpClientModule,
    StoreModule.forFeature(POST_FEATURE.storekey, postReducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostModule {}
