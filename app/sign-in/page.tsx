import Link from 'next/link'
import { AuthForm } from '@/components/auth-form'

export default function SignInPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        <Link href="/" className="text-xl font-bold text-primary">CHAMBAAGO.COM</Link>
        <h1 className="mt-8 text-2xl font-bold">Inicia sesión</h1>
        <p className="mt-2 text-sm text-muted-foreground">Entra a tu cuenta para continuar.</p>
        <div className="mt-8"><AuthForm mode="sign-in" /></div>
        <p className="mt-6 text-sm text-muted-foreground">¿Todavía no tienes cuenta? <Link href="/sign-up" className="font-semibold text-primary">Crear cuenta</Link></p>
      </section>
    </main>
  )
}
