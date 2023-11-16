'use client'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Movies } from "@/types/routes"
import { Pencil } from 'lucide-react';

const categories = [
    'Thriller', 'Action', 'Comedy', 'Drama', 'Horror',
    'Romance', 'Sci-Fi', 'Fantasy', 'Animation', 'Family'
]

export const EditMovieSheet = ({ item }: { item: Movies }) => {

    const [movie, setMovie] = useState({
        id: item.id,
        Title: item.Title ?? '',
        Director: item.Director ?? '',
        Category: item.Category ?? '',
        Year: item.Year ?? 1800,
        Link_image: item.Link_image ?? '',
    });

    useEffect(() => {
        setMovie({
            id: item.id,
            Title: item.Title ?? '',
            Director: item.Director ?? '',
            Category: item.Category ?? '',
            Year: item.Year ?? 1800,
            Link_image: item.Link_image ?? '',
        })
    }, [item])

    const { toast } = useToast()
    const router = useRouter()

    const onSendData = async () => {
        // if the data does not change, do not send a request
        if (
            movie.Title === item.Title && movie.Director === item.Director &&
            movie.Category === item.Category &&
            movie.Year === item.Year && movie.Link_image === item.Link_image
        )
            return;

        // if all the data change, make a put request
        if (
            movie.Title !== item.Title && movie.Director !== item.Director &&
            movie.Category !== item.Category &&
            movie.Year !== item.Year && movie.Link_image !== item.Link_image
        ) {
            const response = await fetch('/api/movies', {
                method: 'PUT',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                toast({
                    title: 'Error',
                    description: 'An error has occurred.',
                    variant: 'destructive'
                })
                return;
            }

            toast({
                title: 'Expense updated',
                description: 'Expense has been updated successfully.',
            })
            router.refresh()
            return;
        }

        // if only one data change, make a patch request
        const response = await fetch('/api/movies', {
            method: 'PATCH',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            toast({
                title: 'Error',
                description: 'An error has occurred.',
                variant: 'destructive'
            })
            return;
        }

        toast({
            title: 'Expense updated',
            description: 'Expense has been updated successfully.',
        })
        router.refresh()
    }


    return (
        <Sheet>

            <SheetTrigger asChild>
                <Button className="mt-3 h-10 w-12 md:mt-0">
                    <Pencil className="h-5 w-5"></Pencil>
                </Button>
            </SheetTrigger>

            <SheetContent>

                <SheetHeader>
                    <SheetTitle>Update a movie</SheetTitle>
                    <SheetDescription>
                        Fill out the form below to add a movie.
                    </SheetDescription>
                </SheetHeader>

                <section className="flex flex-col mt-5 gap-5">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="Title" name="Title" placeholder="Casino"
                            value={movie.Title}
                            onChange={(e) => setMovie({ ...movie, Title: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="director">Director</Label>
                        <Input id="Director" name="Director" placeholder="Martin Scorsese"
                            value={movie.Director}
                            onChange={(e) => setMovie({ ...movie, Director: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Cateogry</Label>
                        <Select
                            onValueChange={(value) => setMovie({ ...movie, Category: value })}
                        >

                            <SelectTrigger>
                                <SelectValue placeholder='Select a category' />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    {
                                        categories.map((category, index) => (
                                            <SelectItem key={index} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="amount">Year</Label>
                        <Input id="Year" name="Year" placeholder="Year" type="number"
                            value={movie.Year}
                            onChange={(e) => setMovie({ ...movie, Year: Number(e.target.value) })}
                            min={1800}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="link">Image Link</Label>
                        <Input id="Link_image" name="Link_image" placeholder="https://example/image.jpg" type="url"
                            value={movie.Link_image}
                            onChange={(e) => setMovie({ ...movie, Link_image: e.target.value })}
                        />
                    </div>

                    <Button
                        onClick={onSendData}
                    >
                        Update Movie
                    </Button>
                </section>

            </SheetContent>

        </Sheet>
    )

}