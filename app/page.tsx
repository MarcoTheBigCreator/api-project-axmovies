import { UserAuthForm } from "@/app/auth/components/UserAuthForm"

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 img-bg" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Axbooks
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Become a part of a vibrant and growing community of book lovers.&rdquo;
              </p>
              <footer className="text-sm">Marco Rodríguez - CEO of Axbooks</footer>
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