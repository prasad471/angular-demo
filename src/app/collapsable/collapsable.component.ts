import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent  {

  constructor() { }
  title = 'appBootstrap';
  
  public isCollapsed = false;

}
