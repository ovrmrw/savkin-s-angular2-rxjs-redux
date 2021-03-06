import {Component, Input, Output, EventEmitter} from 'angular2/core';


// -- Components
/* 
  コンポーネント群。View描画に必要なもの。
  重要なのはDIが書いてある部分とそれらが影響している箇所だけだ。その他は流し読みで構わない。 
  3ヶ所出てくるthis.dispatcher.next()が一体何をしているのか、連鎖して何が起きているのか、僕は最後までそれを理解するのに苦労した。
  結論から言うとdispatcherのnextは巡り巡ってComponentの更新をしているのである。
*/
// TodoListコンポーネントの子コンポーネント。
@Component({
  selector: 'todo',
  template: `
    <span (click)="toggle.next()" [style.textDecoration]="textEffect">
      {{todo.text}}
    </span>
  `
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() toggle = new EventEmitter(); // "angular2 eventemitter"でググる。

  get textEffect() {
    return this.todo.completed ? 'line-through' : 'none';
  }
}