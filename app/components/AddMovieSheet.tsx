'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

const categories = [
    'Thriller', 'Action', 'Comedy', 'Drama', 'Horror',
    'Romance', 'Sci-Fi', 'Fantasy', 'Animation', 'Family'
]

export const AddMovieSheet = () => {

    const [movie, setMovie] = useState({
        Title: '',
        Director: '',
        Category: '',
        Year: 1800,
        Link_image: ''
    });

    const { toast } = useToast()
    const router = useRouter()

    const onSendData = async () => {
        if (movie.Title === '' || movie.Director === '' || movie.Category === '' || movie.Year === 1800 || movie.Link_image === '') return;
        const response = await fetch('/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            toast({
                title: 'Error',
                description: 'An error has occurred.',
            })
            return;
        }

        setMovie({ Title: '', Director: '', Category: '', Year: 1800, Link_image: '' });
        toast({
            title: 'Movie added',
            description: 'Movie has been added successfully.',
        })
        router.refresh()
    }

    return (
        <Sheet>

            <SheetTrigger asChild>
                <Button className="mt-3 md:mt-0">
                    Add Movie
                </Button>
            </SheetTrigger>

            <SheetContent>

                <SheetHeader>
                    <SheetTitle>Add an movie</SheetTitle>
                    <SheetDescription>
                        Fill out the form below to add an movie.
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
                        <Label htmlFor="link">Link_image</Label>
                        <Input id="Link_image" name="Link_image" placeholder="https://example/image.jpg" type="url"
                            value={movie.Link_image}
                            onChange={(e) => setMovie({ ...movie, Link_image: e.target.value })}
                        />
                    </div>

                    <Button
                        onClick={onSendData}
                    >
                        Add Movie
                    </Button>
                </section>

            </SheetContent>

        </Sheet>
    )

}