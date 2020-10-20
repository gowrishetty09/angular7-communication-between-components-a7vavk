import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input()
  parentOutputVar;

  constructor() {}

  ngOnInit() {}

  private testMethod(): string[] {
    return ['Inside TestMethod', 'Another'];
  }

  public anotherTestMethod(): string[] {
    return ['Another TestMethod', 'Something else'];
  }

}