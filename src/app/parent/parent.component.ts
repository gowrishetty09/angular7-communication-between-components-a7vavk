import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentVar = [];
  parentOutputVar = [];

  @ViewChild(ChildComponent)
  private testChildComp: ChildComponent;

  constructor() { }

  ngOnInit() {
    this.parentVar = this.testChildComp.anotherTestMethod();
    this.parentOutputVar = ['One', 'Two', 'Three'];
  }

}