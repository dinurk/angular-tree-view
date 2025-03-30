import { Component } from '@angular/core';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ITreeNode } from '../interfaces';

@Component({
  selector: 'app-root',
  imports: [TreeViewComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /** Выносить получение данных в отдельный сервис не стал, т.к. по заданию этого не требовалось */
  public data: ITreeNode[] = [
    {
      id: 1,
      title: 'Значение 1',
      is_deleted: false,
      children: [
        {
          id: 2,
          title: 'Значение 1.1',
          is_deleted: false,
          children: [
            {
              id: 3,
              title: 'Значение 1.1.1',
              is_deleted: true,
              children: [],
            },
          ],
        },
        {
          id: 4,
          title: 'Значение 1.2',
          is_deleted: false,
          children: [
            {
              id: 5,
              title: 'Значение 1.2.1',
              is_deleted: false,
              children: [],
            },
            {
              id: 6,
              title: 'Значение 1.2.2',
              is_deleted: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: 'Значение 2',
      is_deleted: false,
      children: [
        {
          id: 8,
          title: 'Значение 2.1',
          is_deleted: true,
          children: [
            {
              id: 9,
              title: 'Значение 2.1.1',
              is_deleted: true,
              children: [
                {
                  id: 10,
                  title: 'Значение 2.1.1.1',
                  is_deleted: true,
                  children: [
                    {
                      id: 11,
                      title: 'Значение 2.1.1.1.1',
                      is_deleted: true,
                      children: [
                        {
                          id: 12,
                          title: 'Значение 2.1.1.1.1.1',
                          is_deleted: false,
                          deleted_at: null,
                          children: [
                            {
                              id: 13,
                              title: 'Значение 2.1.1.1.1.1.1',
                              is_deleted: false,
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 13,
                          title: 'Значение 2.1.1.1.1.2',
                          is_deleted: false,
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  public readonly exampleJson: string = `[ { "id": 3, "title": "Значение 1.1.1", ... } ]`;

  /** Строка с JSON, отображаемым в поле ввода */
  public dataString: string = JSON.stringify(this.data, null, 2);

  /** Обработчик изменения JSON-строки с данными */
  public onTreeDataChange(): void {
    try {
      this.data = JSON.parse(this.dataString ?? '[]');
    } catch (e) {
      this.data = [];
    }
  }

  /** Форматировать JSON, отображаемый в поле ввода */
  public format(): void {
    try {
      const data = JSON.parse(this.dataString ?? '[]');
      this.dataString = JSON.stringify(data, null, 2);
    } catch (e) {
      this.data = [];
    }
  }

  /** Очистить поле ввода и дерево */
  public clear(): void {
    this.dataString = '[]';
    this.data = [];
  }
}
