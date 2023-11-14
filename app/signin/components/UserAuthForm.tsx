import * as React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react";

export const UserAuthForm = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)

    const router = useRouter()

    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const result = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/' })

        setIsLoading(false)

        if (result?.error) {
            setError('Invalid email or password. Please try again.')
        } else {
            // Authentication successful, you can redirect or handle it as needed
            router.push('/')
        }
    }

    return (
        <div className={"grid gap-6"}>
            <form onSubmit={handleSubmit}>
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
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="password">
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
                    {error && (
                        <p className="text-red-500 text-center font-medium text-sm mt-1">{error}</p>
                    )}
                    <Button className={email === "" || password === "" ? 'disabled:opacity-80 mt-2' : 'mt-2'} disabled={!email || !password || isLoading} type="submit">
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
