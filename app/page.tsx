'use client';
import { UserAuthForm } from "@/app/components/UserAuthForm"
import { useSession } from "next-auth/react"

export default function AuthenticationPage() {
  const session = useSession({
    required: false,
    onUnauthenticated() {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    },
  })

  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 img-bg" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Axmovies
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Become a part of a vibrant and growing community of movie lovers.&rdquo;
              </p>
              <footer className="text-sm">Marco Rodríguez - CEO of Axmovies</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                LOGIN
              </h1>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}

AuthenticationPage.requireAuth = false