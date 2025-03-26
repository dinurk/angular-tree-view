import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeNodeComponent } from './tree-node.component';

/** Тесты для компонента "Узел Дерева" */
describe('TreeNodeComponent', () => {
  let component: TreeNodeComponent;
  let fixture: ComponentFixture<TreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeNodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TreeNodeComponent);
    component = fixture.componentInstance;
    component.node = {
      id: 1,
      title: 'TestText',
      is_deleted: false,
      children: [],
    };
    fixture.detectChanges();
  });

  it('Тест создания компонента', () => {
    expect(component).toBeDefined();
  });

  it('Тест отображения содержимого узла (id-title)', () => {
    const span = fixture.nativeElement.querySelector('.tree-node__content');
    expect(span.textContent).toEqual('1 - TestText');
  });

  it('Тест отображения кнопок для раскрытия/сокрытия содержимого узла', () => {
    component.node = {
      id: 1,
      title: 'value 1',
      is_deleted: false,
      children: [
        {
          id: 2,
          title: 'value 1.1',
          is_deleted: false,
          children: [],
        },
      ],
    };

    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector(
      '.tree-node__expand-button'
    );
    expect(span.textContent).toContain('⯆');
    expect(component.expanded).toEqual(false);

    component.expand();
    fixture.detectChanges();

    expect(span.textContent).toContain('⯅');
    expect(component.expanded).toEqual(true);
  });

  it('Тест отображения удаленного узла', () => {
    component.node = {
      id: 1,
      title: 'TestText',
      is_deleted: true,
      children: [],
    };
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('.tree-node');
    expect(div.classList).toContain('tree-node--deleted');
  });

  it('Тест отображения узлов-потомков', () => {
    component.node = {
      id: 1,
      title: 'value 1',
      is_deleted: false,
      children: [
        {
          id: 2,
          title: 'value 1.1',
          is_deleted: false,
          children: [],
        },
        {
          id: 3,
          title: 'value 1.2',
          is_deleted: false,
          children: [],
        },
      ],
    };

    fixture.detectChanges();

    const descendantNodesBeforeExpand =
      fixture.nativeElement.querySelectorAll('app-tree-node');

    expect(descendantNodesBeforeExpand.length).toEqual(0);

    component.expand();
    fixture.detectChanges();

    const descendantNodesAfterExpand =
      fixture.nativeElement.querySelectorAll('app-tree-node');

    expect(descendantNodesAfterExpand.length).toEqual(2);
  });
});
