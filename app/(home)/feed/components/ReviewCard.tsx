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
    <>
      <Card className="flex flex-col-reverse lg:flex-row p-2 mt-4">
        <div className="overflow-hidden 2xl:grid place-content-center w-1/4 2xl:w-1/3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1c/El_principito.jpg"
            alt="librofeo"
            className="w-full aspect-[3/4] object-contain" />
        </div>
        <div>
          <CardHeader className="grid grid-cols-2 items-start gap-4">
            <div className="space-y-2">
              <CardTitle className="text-3xl">Película fea</CardTitle>
              <div className="flex space-x-1">
                <CardDescription className="text-sm font-medium text-purple-500">Director:</CardDescription> <CardDescription> Mario Alvarado</CardDescription>
              </div>
            </div>
            <div className="flex items-center pr-4 space-x-1 rounded-md bg-secondary text-secondary-foreground col-end-7">
              <Button variant="secondary" className="px-3 shadow-none">
                <StarFilledIcon className="h-5 w-5 text-yellow-500" />
              </Button>
              <span className="text-base font-medium">
                5.0
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Separator />
            <CardDescription className="text-sm">
              La película más feasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa coño de la madre tengo sida
            </CardDescription>
            <div className="flex flex-col gap-1 mt-4 text-sm text-muted-foreground">
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
        </div>
      </Card>
    </>
  )
}