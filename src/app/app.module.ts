import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { ChartService } from '../app/chart/ChartService';
import { WebSocketComponent } from './web-socket/web-socket.component';
//ej2 Chart module
import { StockChartAllModule, RangeNavigatorAllModule, ChartAllModule, CandleSeriesService, ColumnSeriesService,DateTimeService } from '@syncfusion/ej2-angular-charts';
import { GitGraphComponent } from './git-graph/git-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CollapsableComponent,
    WebSocketComponent,
    GitGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    StockChartAllModule
  ],
  providers: [ChartService,CandleSeriesService, ColumnSeriesService,DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
