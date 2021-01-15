import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FeatureListComponent } from './ng-2048/feature-list.component';
import { Ng2048RoutingModule } from './ng-2048-routing.module';
import { SnakeComponent } from './snake/snake.component';
import { BestScoreManager } from './snake/app.storage.service';

@NgModule({
  declarations: [FeatureListComponent, SnakeComponent],
  imports: [CommonModule, SharedModule, Ng2048RoutingModule],
  providers: [BestScoreManager],
})
export class Ng2048Module { }
