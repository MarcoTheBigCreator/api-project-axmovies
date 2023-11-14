'use client';
import * as React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react";


export const UserAuthForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const router = useRouter()

    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")


    return (
        <div className={"grid gap-6"}>
            <form action="#" method="POST">
                <div className="grid gap-2">
                    <div className="grid gap-1 mb-2">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                            disabled={isLoading}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-1 mb-4">
                        <Label className="sr-only" htmlFor="passsword">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            autoComplete="password"
                            disabled={isLoading}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button className={email === "" || password === "" ? 'disabled:opacity-80' : ''} disabled={!email || !password || isLoading} onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}