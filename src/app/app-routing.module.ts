import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from '../app/chart/chart.component';
import { CollapsableComponent } from '../app/collapsable/collapsable.component';
import { WebSocketComponent } from '../app/web-socket/web-socket.component';
import { GitGraphComponent } from '../app/git-graph/git-graph.component';

const routes: Routes = [
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'collapsable',
    component: CollapsableComponent
  },
  {
    path: 'websocket',
    component: WebSocketComponent
  },
  {
    path: 'gitgraph',
    component: GitGraphComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
