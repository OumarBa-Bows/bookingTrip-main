import React from 'react'
 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
 
import { DataRow, Column } from '@/models/columnsModels'



interface RenderTableProps {
  dataTable: DataRow[];
  columnTable: Column[];
  actions ?: React.ReactNode
}

const RenderTable: React.FC<RenderTableProps> = ({ dataTable, columnTable , actions }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columnTable.map((col) => (
            <TableHead key={col.accessor} className={col.isHidden ? 'hidden' : ''}>
              {col.header}
            </TableHead>
          ))}
          <TableHead>
            <span >Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataTable.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columnTable.map((col) => (
              <TableCell key={col.accessor} className={col.isHidden ? 'hidden' : ''}>
                {  row[col.accessor]
}
              </TableCell>
            ))}
            <TableCell key={rowIndex}>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
              {
                actions
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default RenderTable
