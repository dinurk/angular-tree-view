/** Узел дерева */
export interface ITreeNode {
  /** ID */
  id: number;
  /** Значение */
  title: string;
  /** Статус (удален / не удален) */
  is_deleted: boolean;
  /** Узлы - потомки */
  children: ITreeNode[];
  /** Дата удаления узла */
  deleted_at?: string | null;
}
