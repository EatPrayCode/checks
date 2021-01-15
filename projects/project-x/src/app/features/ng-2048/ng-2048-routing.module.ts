import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureListComponent } from './ng-2048/feature-list.component';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  {
    path: '',
    component: SnakeComponent,
    data: { title: 'projectx.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ng2048RoutingModule {}
