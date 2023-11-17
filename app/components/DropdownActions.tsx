'use client'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Movies } from "@/types/routes"
import { useRouter } from "next/navigation"
import { EditMovieSheet } from "./EditMovieSheet"
import { Trash } from "lucide-react"

export const DropdownActions = ({ item }: { item: Movies }) => {

    const { toast } = useToast()
    const router = useRouter()

    const onDeleteItem = async () => {
        const res = await fetch('/api/movies', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: item.id })
        })
        if (!res.ok) { 
            toast({
                title: 'Error',
                description: 'An error has occurred.',
                variant: 'destructive'
            })
            return
        }

        toast({
            title: `${item.Title} has been deleted`,
            description: 'Movie has been deleted successfully.',
        })

        router.refresh()
    }

    return (
        <div className="flex justify-center items-center space-x-2">
            <Button size={"icon"}>
                <EditMovieSheet item={item} />
            </Button>

            <Button size={"icon"} variant={"destructive"} onClick={onDeleteItem} className="w-12 h-10">
                <Trash className="h-5 w-5"/>
            </Button>
        </div>
    )

}