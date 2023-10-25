'use client';
import { useEffect, useState } from "react";

import { Movies } from "@/types/routes";

import {
    CircleIcon,
} from "@radix-ui/react-icons"


import { Calendar } from "lucide-react"

import {
    ContextMenu,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"


export const MovieCover = () => {

    const [book, setBook] = useState<Movies[]|[] >([])

    useEffect(() => {
        fetch('/api/movies')
            .then(response => response.json())
            .then(data => setBook(data));
    }
        , []);


    return (
        <>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-2 lg:gap-4 mt-4">
                {book.map((item) => (
                    <div className="w-full space-y-3 hover:scale-105 transition-all mb-3" key={item.id}>
                        <ContextMenu>
                            <ContextMenuTrigger>
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={item.link_image}
                                        alt={item.title}
                                        className="h-[320px] w-[280px] transition-all aspect-[3/4] object-cover" />
                                </div>
                            </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="space-y-1 text-sm">
                            <div className="container"></div>
                            <h3 className="text-base font-semibold leading-none">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.author}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <CircleIcon className="mr-1 h-3 w-3 fill-purple-700 text-purple-700" />
                                {item.category}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3 text-purple-700" />
                                {item.year}
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </>
    )
}