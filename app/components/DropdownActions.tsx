'use client'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Pencil, Trash } from "lucide-react"

export const DropdownActions = () => {

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                    <MoreVertical className="h-4 w-4"/>
                </Button>

            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">

                <DropdownMenuLabel>Actions</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4"/>
                        <span>Edit</span>
                    </DropdownMenuItem> 

                    <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4"/>
                        <span>Delete</span>
                    </DropdownMenuItem>     
                </DropdownMenuGroup> 

            </DropdownMenuContent>

        </DropdownMenu>
    )

}