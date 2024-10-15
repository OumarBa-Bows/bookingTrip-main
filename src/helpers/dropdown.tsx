import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu'
import { ListFilter } from 'lucide-react'
import React from 'react'
import { Button } from 'react-day-picker'

export default function AppDropdown() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="h-8 gap-1">
        <ListFilter className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Filter
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked>
        Active
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>
        Archived
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu> 
  )
}
