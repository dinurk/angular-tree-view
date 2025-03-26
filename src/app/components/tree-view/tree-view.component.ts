import { Component, Input } from '@angular/core';
import { ITreeNode } from '../../../interfaces';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

/** Компонент дерево */
@Component({
  selector: 'app-tree-view',
  imports: [TreeNodeComponent],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
})
export class TreeViewComponent {
  /** Данные для отображения в дереве */
  @Input()
  public treeData!: ITreeNode[];
}
