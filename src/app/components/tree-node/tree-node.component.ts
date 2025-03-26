import { Component, Input } from '@angular/core';
import { ITreeNode } from '../../../interfaces';
import { CommonModule } from '@angular/common';

/** Компонент Узел Дерева */
@Component({
  selector: 'app-tree-node',
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
})
export class TreeNodeComponent {
  /** Узел дерева, соотвествующий данному TreeNodeComponent */
  @Input()
  public node!: ITreeNode;

  /** Ветка раскрыта */
  public expanded: boolean = false;

  /**
   * Компонент не содержит потомков
   * @returns true - если компонент не содержит потомков, иначе - false
   * */
  public get isLeaf(): boolean {
    return !this.node.children || this.node.children.length === 0;
  }

  /** Показать/скрыть содержимое узла */
  public expand(): void {
    this.expanded = !this.expanded;
  }
}
