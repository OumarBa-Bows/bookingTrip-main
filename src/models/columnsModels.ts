export interface Column {
    header: string;
    accessor: string; // Key to access the value in data
    isHidden?: boolean; // Optional for responsive design
  }
  
export interface DataRow {
    [key: string]: any; // Dynamic properties
  }