import { Component, OnInit, ViewChild, AfterViewInit, ContentChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-custom-tree',
  templateUrl: './custom-tree.component.html',
  styleUrls: ['./custom-tree.component.scss']
})
export class CustomTreeComponent implements OnInit, AfterViewInit {
  // @ContentChild('useTemp') useTemp;
  @Input() nodeData; // 树 数据
  @Output() treeClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }
  expanded(item) {
    item.expanded = !item.expanded;
  }
  // 选中把整个itom抛出去
  active(item) {
    this.treeClick.emit(item);
  }
}
