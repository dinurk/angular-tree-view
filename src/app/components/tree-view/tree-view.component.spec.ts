import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewComponent } from './tree-view.component';

/** Тесты для компонента Дерево */
describe('TreeViewComponent', () => {
  let component: TreeViewComponent;
  let fixture: ComponentFixture<TreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TreeViewComponent);
    component = fixture.componentInstance;
    component.treeData = [];
    fixture.detectChanges();
  });

  it('Тест создания компонента', () => {
    expect(component).toBeTruthy();
  });

  it('Тест отображения узлов', () => {
    const nodesBeforeInput =
      fixture.nativeElement.querySelectorAll('app-tree-node');

    expect(nodesBeforeInput.length).toEqual(0);

    component.treeData = [
      {
        id: 1,
        title: 'value 1',
        is_deleted: false,
        children: [],
      },
      {
        id: 2,
        title: 'value 1.1',
        is_deleted: false,
        children: [],
      },
    ];

    fixture.detectChanges();
    fixture.detectChanges();

    const nodesAfterInput =
      fixture.nativeElement.querySelectorAll('app-tree-node');

    expect(nodesAfterInput.length).toEqual(2);
  });
});
