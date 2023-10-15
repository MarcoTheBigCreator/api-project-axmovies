"use client"

import * as React from "react"
import { loginWithEmail } from "@/firebase/provider"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { useRouter } from "next/router"


export const UserAuthForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    // const router = useRouter()

    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    
    const onLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const response = await loginWithEmail(email, password)
        console.log(response);
        if((response as {ok: boolean}).ok === false) return alert("Error al iniciar sesión")
        
        console.log("Bienvenido");
    }


    return (
        <div className={"grid gap-6"}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1 mb-2">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-1 mb-4">
                        <Label className="sr-only" htmlFor="passsword">
                            Email
                        </Label>
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button disabled={isLoading} type="submit">
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Log in 
                    </Button>
                </div>
            </form>
        </div>
    )
}