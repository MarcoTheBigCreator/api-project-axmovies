import {
    CircleIcon,
    PersonIcon,
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
import { Calendar } from "lucide-react"
  
  export function ReviewCard() {
    return (
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-2">
            <CardTitle className="text-3xl">Libro feo</CardTitle>
            <CardDescription className="text-sm font-medium">Book's Author: Mario Alvarado</CardDescription>
            <Separator/>
            <CardDescription className="text-md">
              Es en mi opinión el libro más feo que pueda existir omegalul
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <StarFilledIcon className="h-5 w-5 text-yellow-500" />
            </Button>
            <span className="text-base font-medium">
              5.0
            </span>
          </div>
        </CardHeader>
        <CardContent>
        {/* <Separator className="mb-4" /> */}
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-purple-700 text-purple-700" />
              Terror
            </div>
            <div className="flex items-center">
              <PersonIcon className="mr-1 h-3 w-3 fill-purple-700 text-purple-700" />
              Marco Rodríguez
            </div>
            <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3 text-purple-700" />
              April 2023
              </div>
          </div>
        </CardContent>
      </Card>
    )
  }