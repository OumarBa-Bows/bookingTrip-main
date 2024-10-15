import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from '@radix-ui/react-dropdown-menu'
import { ListFilter } from 'lucide-react'
import React from 'react'
import { Button } from 'react-day-picker'

export default function AppTabs() {
  return (
     <Tabs defaultValue='value'>
             <div className="flex items-center p-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" > Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
              
              </div>
            </div>

            <TabsContent value="all">
               {/* {childrenContent} */}
            </TabsContent> 
     </Tabs>
  )
}
