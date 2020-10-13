export type Order = 'desc' | 'asc';

export interface Column {
  header: string;
  field: string;
  sortable?: boolean;
  width?: number;
  type?: string;
  url?: string;
}
