import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

interface  SearchComponentProps {
  layout?:string;
}

export default function SearchComponent({layout = 'header'} : SearchComponentProps) {
  return (
    <form>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className={layout !== 'header' ?'w-full appearance-none bg-background pl-8 shadow-none ' : 'w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'}          />
        </div>
      </form>
  )
}
