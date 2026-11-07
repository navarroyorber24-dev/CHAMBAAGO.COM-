import Link from 'next/link'
import { AuthForm } from '@/components/auth-form'

export default function SignUpPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        <Link href="/" className="text-xl font-bold text-primary">CHAMBAAGO.COM</Link>
        <h1 className="mt-8 text-2xl font-bold">Crea tu cuenta</h1>
        <p className="mt-2 text-sm text-muted-foreground">Regístrate para conectar con profesionales.</p>
        <div className="mt-8"><AuthForm mode="sign-up" /></div>
        <p className="mt-6 text-sm text-muted-foreground">¿Ya tienes cuenta? <Link href="/sign-in" className="font-semibold text-primary">Iniciar sesión</Link></p>
      </section>
    </main>
  )
}
