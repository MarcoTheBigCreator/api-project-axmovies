'use client';
import { useEffect, useState } from "react";

import { Movies } from "@/types/routes";

import {
    CircleIcon,
} from "@radix-ui/react-icons"


import { Calendar } from "lucide-react"
import { DropdownActions } from './DropdownActions';

import {
    ContextMenu,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"


export const MovieCover = () => {

    const [movie, setMovie] = useState<Movies[] | []>([])

    useEffect(() => {
        fetch('/api/movies')
            .then(response => response.json())
            .then(data => setMovie(data));
    }
        , []);


    return (
        <>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-2 lg:gap-4 mt-5">
                {movie.map((item) => (
                    <div className="w-full space-y-3 hover:scale-105 transition-all mb-5" key={item.id}>
                        <ContextMenu>
                            <ContextMenuTrigger>
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={item.Link_image}
                                        alt={item.Title}
                                        className="h-[320px] w-[280px] transition-all aspect-[3/4] object-cover" />
                                </div>
                            </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="grid grid-cols-1 items-start gap-4">
                            <div className="col-span-4 space-y-1 text-sm">
                                <h3 className="text-base font-semibold leading-none">{item.Title}</h3>
                                <p className="text-sm text-muted-foreground">{item.Director}</p>
                            </div>
                            <div className="col-end-6">
                                <DropdownActions item={item} />
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <CircleIcon className="mr-1 h-3 w-3 fill-purple-700 text-purple-700" />
                                {item.Category}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3 text-purple-700" />
                                {item.Year}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}