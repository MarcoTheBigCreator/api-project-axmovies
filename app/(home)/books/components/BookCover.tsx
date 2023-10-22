
import {
    ContextMenu,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"


export const BookCover = () => {
    return (
        <>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-2 lg:gap-4 mt-4">
                <div className="w-full space-y-3">
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg"
                                    alt="librofeo"
                                    className="h-[330px] w-[250px] transition-all hover:scale-105 aspect-[3/4]" />
                            </div>
                        </ContextMenuTrigger>
                    </ContextMenu>
                    <div className="space-y-1 text-sm">
                        <h3 className="font-medium leading-none">El principito</h3>
                        <p className="text-xs text-muted-foreground">Thomas tu ptm</p>
                    </div>
                </div>
                <div className="w-full space-y-3">
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg"
                                    alt="librofeo"
                                    className="h-[330px] w-[250px] transition-all hover:scale-105 aspect-[3/4]" />
                            </div>
                        </ContextMenuTrigger>
                    </ContextMenu>
                    <div className="space-y-1 text-sm">
                        <h3 className="font-medium leading-none">El principito</h3>
                        <p className="text-xs text-muted-foreground">Thomas tu ptm</p>
                    </div>
                </div>
                <div className="w-full space-y-3">
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg"
                                    alt="librofeo"
                                    className="h-[330px] w-[250px] transition-all hover:scale-105 aspect-[3/4]" />
                            </div>
                        </ContextMenuTrigger>
                    </ContextMenu>
                    <div className="space-y-1 text-sm">
                        <h3 className="font-medium leading-none">El principito</h3>
                        <p className="text-xs text-muted-foreground">Thomas tu ptm</p>
                    </div>
                </div>
                <div className="w-full space-y-3">
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg"
                                    alt="librofeo"
                                    className="h-[330px] w-[250px] transition-all hover:scale-105 aspect-[3/4]" />
                            </div>
                        </ContextMenuTrigger>
                    </ContextMenu>
                    <div className="space-y-1 text-sm">
                        <h3 className="font-medium leading-none">El principito</h3>
                        <p className="text-xs text-muted-foreground">Thomas tu ptm</p>
                    </div>
                </div>
            </div>

        </>
    )
}