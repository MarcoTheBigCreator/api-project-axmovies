import {
    CircleIcon,
    StarFilledIcon,
  } from "@radix-ui/react-icons"
  
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Separator } from "@/components/ui/separator"
  
  export function ReviewCard() {
    return (
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>Libro feo</CardTitle>
            <CardDescription>
              Es en mi opinión el libro más feo que pueda existir omegalul
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <StarFilledIcon className="h-5 w-5" />
            </Button>
            <span className="text-base">
              5.0
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <StarFilledIcon className="mr-1 h-3 w-3" />
              20k
            </div>
            <div>Updated April 2023</div>
          </div>
        </CardContent>
      </Card>
    )
  }