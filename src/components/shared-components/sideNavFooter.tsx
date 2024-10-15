import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
    MoreVertical,
  } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SideNavFooter() {
  return (
    <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-white">User 1</p>
                <p className="text-white size-3">admini@dreamtrip</p>
              </div>
            </div>

            <div className="color-white z-index:1">
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:'none'" style={{backgroundColor:"initial" , paddingTop:'-50px'}}>
                  <MoreVertical color="white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Card>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </Card>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
  )
}
