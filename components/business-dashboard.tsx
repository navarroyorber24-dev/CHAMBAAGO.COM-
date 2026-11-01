'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Activity, ArrowDownRight, ArrowUpRight, BriefcaseBusiness,
  ChartNoAxesCombined, CheckCircle2, ChevronRight, CircleDollarSign,
  ClipboardList, Database, FileSpreadsheet, Home, Menu, ShieldCheck,
  Users, Wallet, X, Wrench
} from 'lucide-react'

const sections = [
  { label: 'Panel central', href: '#central', icon: Home },
  { label: 'Usuarios y clientes', href: '#usuarios', icon: Users },
  { label: 'Servicios', href: '#servicios', icon: Wrench },
  { label: 'Ingresos y egresos', href: '#finanzas', icon: CircleDollarSign },
  { label: 'Datos y auditoría', href: '#datos', icon: Database },
]

const modules = [
  { title: 'Usuarios', detail: 'Registro, acceso, roles y estado de cuenta', icon: Users, color: 'bg-blue-600' },
  { title: 'Clientes', detail: 'Solicitudes, presupuestos y conformidad', icon: Home, color: 'bg-emerald-600' },
  { title: 'Profesionales', detail: 'Validación, especialidades y cobertura', icon: BriefcaseBusiness, color: 'bg-violet-600' },
  { title: 'Servicios', detail: 'Asignación, seguimiento y evidencias', icon: ClipboardList, color: 'bg-amber-500' },
  { title: 'Pagos', detail: 'Comprobantes, revisión y confirmación', icon: Wallet, color: 'bg-cyan-600' },
  { title: 'Egresos', detail: 'Comisiones, reembolsos y gastos', icon: ArrowDownRight, color: 'bg-rose-600' },
]

function Metric({ title, note, icon: Icon }: { title: string; note: string; icon: typeof Users }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between"><span className="text-sm font-medium text-slate-500">{title}</span><Icon className="text-blue-700" size={20}/></div>
    <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">—</p>
    <p className="mt-2 text-xs text-slate-500">{note}</p>
  </div>
}

export default function BusinessDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="min-h-screen bg-slate-50 text-slate-900">
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 text-slate-600 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X/> : <Menu/>}</button>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-800 text-amber-300"><Home size={22}/></div>
          <div><span className="text-lg font-black tracking-tight">CHAMBAAGO<span className="text-amber-500">.COM</span></span><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-slate-500">Tu solución rápida para el hogar</p></div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          <a href="#central" className="hover:text-blue-800">Central</a><a href="#servicios" className="hover:text-blue-800">Servicios</a><a href="#finanzas" className="hover:text-blue-800">Control financiero</a><a href="#datos" className="hover:text-blue-800">Red de datos</a>
        </nav>
        <div className="flex items-center gap-2"><Link href="/sign-in" className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50 sm:inline-flex">Ingresar</Link><Link href="/sign-up" className="rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm hover:bg-amber-300">Crear cuenta</Link></div>
      </div>
      {menuOpen && <nav className="border-t border-slate-200 bg-white p-4 md:hidden">{sections.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700"><item.icon size={18}/>{item.label}</a>)}</nav>}
    </header>

    <section className="bg-gradient-to-br from-[#071d42] via-[#0b3974] to-[#087b9d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:py-20">
        <div><span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"><Activity size={14}/> Una red, una central, todo en orden</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Conecta con el profesional que tu hogar necesita.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100">Publica tu problema, comparte una foto, compara presupuestos y sigue el servicio desde una sola plataforma.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/sign-up" className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300">Solicitar un servicio <ChevronRight size={18}/></Link><Link href="/sign-in" className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">Acceso a mi cuenta</Link></div>
          <p className="mt-5 text-xs text-blue-200">Para clientes y profesionales · Seguimiento y comprobantes · Historial de actividad</p>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center gap-3"><div className="rounded-xl bg-amber-400 p-3 text-slate-950"><Database size={24}/></div><div><p className="font-bold">Central de control CHAMBAAGO</p><p className="text-xs text-blue-100">Arquitectura de información propuesta</p></div></div>
          <div className="my-6 rounded-2xl border border-cyan-300/40 bg-[#061b3d]/70 p-4 text-center"><p className="text-xs uppercase tracking-widest text-cyan-200">Nodo principal</p><p className="mt-1 text-xl font-black">CHAMBAAGO.COM</p><p className="text-sm text-blue-100">Base de datos central</p></div>
          <div className="grid grid-cols-2 gap-3">{['Usuarios y clientes','Profesionales','Servicios y evidencias','Pagos y egresos'].map(x=><div key={x} className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center text-sm font-semibold">{x}</div>)}</div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-emerald-200"><ShieldCheck size={16}/> Accesos por rol y registro de auditoría</div>
        </div>
      </div>
    </section>

    <section id="central" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Panel de control</p><h2 className="mt-2 text-3xl font-black tracking-tight">Vista general de la plataforma</h2><p className="mt-2 text-sm text-slate-500">Indicadores preparados para conectarse a la base de datos central.</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800"><Activity size={14}/> Pendiente de conexión a datos reales</span></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric title="Usuarios registrados" note="Cuentas únicas activas y pendientes" icon={Users}/><Metric title="Clientes" note="Clientes con solicitudes" icon={Home}/><Metric title="Profesionales" note="Perfiles verificados y pendientes" icon={BriefcaseBusiness}/><Metric title="Ingresos confirmados" note="Solo pagos verificados (S/)" icon={ArrowUpRight}/></div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center gap-2"><ArrowUpRight className="text-emerald-600"/><h3 className="font-bold">Ingresos y egresos</h3></div><p className="mt-2 text-sm leading-6 text-slate-500">Separación de pagos reportados, pagos confirmados, comisiones de la plataforma, pagos a profesionales y gastos operativos. Los importes aparecerán al conectar los movimientos reales.</p><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-emerald-50 p-4"><p className="text-xs text-emerald-800">Ingresos confirmados</p><p className="mt-2 text-2xl font-bold text-emerald-900">S/ —</p></div><div className="rounded-xl bg-rose-50 p-4"><p className="text-xs text-rose-800">Egresos pagados</p><p className="mt-2 text-2xl font-bold text-rose-900">S/ —</p></div></div></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center gap-2"><ChartNoAxesCombined className="text-blue-700"/><h3 className="font-bold">Trazabilidad cronológica</h3></div><ol className="mt-4 space-y-3 text-sm text-slate-600">{['Cuenta creada y rol asignado','Solicitud publicada por el cliente','Profesional acepta y registra avance','Cliente confirma el trabajo y califica','Pago verificado y recepción confirmada'].map((x,i)=><li key={x} className="flex items-start gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">{i+1}</span>{x}</li>)}</ol></div>
      </div>
    </section>

    <section id="usuarios" className="scroll-mt-24 bg-white py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Módulos conectados</p><h2 className="mt-2 text-3xl font-black">Una sola red de información</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Cada módulo alimenta la central; los permisos determinan quién puede consultar, crear, aprobar o modificar cada registro.</p><div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{modules.map(m=><div key={m.title} className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg"><div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${m.color}`}><m.icon size={21}/></div><h3 className="mt-4 font-bold">{m.title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{m.detail}</p></div>)}</div></div></section>

    <section id="servicios" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-14 sm:px-6"><div className="grid gap-8 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Flujo de servicio</p><h2 className="mt-2 text-3xl font-black">Del problema a la solución, paso a paso</h2><p className="mt-3 text-sm leading-6 text-slate-500">Cada paso deja fecha, responsable y estado para que cliente, profesional y administración compartan el mismo historial.</p></div><div className="space-y-3">{[['01','Cliente publica','Describe el problema, adjunta fotos y define presupuesto.'],['02','Profesional acepta','Recibe la solicitud y confirma disponibilidad.'],['03','Trabajo y evidencia','Registra llegada, avance y foto del resultado.'],['04','Cliente confirma','Aprueba el trabajo y deja su calificación obligatoria.'],['05','Pago verificado','Se revisa el comprobante y el receptor confirma la recepción.']].map(([n,t,d])=><div key={n} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"><span className="text-lg font-black text-amber-500">{n}</span><div><p className="font-bold">{t}</p><p className="mt-1 text-sm text-slate-500">{d}</p></div></div>)}</div></div></section>

    <section id="finanzas" className="scroll-mt-24 bg-[#0b2448] py-14 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Control financiero</p><h2 className="mt-2 text-3xl font-black">Ingresos y egresos sin mezclar conceptos</h2><p className="mt-3 text-sm leading-6 text-blue-100">La central distingue el dinero pagado por el cliente, la comisión que corresponde a la plataforma, el importe del profesional y los gastos del negocio.</p></div><div className="grid gap-3 sm:grid-cols-2">{[['Volumen de pagos','Total de servicios pagados'],['Comisión plataforma','Ingreso propio de la plataforma'],['Pago profesional','Importe que recibe el trabajador'],['Gastos operativos','Egresos con comprobante']].map(([t,d])=><div key={t} className="rounded-xl border border-white/15 bg-white/5 p-4"><p className="font-bold">{t}</p><p className="mt-1 text-xs leading-5 text-blue-100">{d}</p></div>)}</div></div></section>

    <section id="datos" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-14 sm:px-6"><div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 sm:p-9"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex items-center gap-2 text-blue-800"><FileSpreadsheet/><p className="text-xs font-bold uppercase tracking-[.2em]">Plantilla de datos</p></div><h2 className="mt-3 text-2xl font-black">Registro, control y auditoría</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Hojas para usuarios, clientes, profesionales, servicios, pagos, egresos, resumen automático y auditoría cronológica. El archivo es auxiliar: la central web debe ser la fuente oficial.</p></div><div className="rounded-2xl bg-white p-4 text-blue-800"><FileSpreadsheet size={36}/></div></div><div className="mt-6 flex flex-wrap gap-2">{['Usuarios','Clientes','Profesionales','Servicios','Pagos','Egresos','Resumen','Auditoría'].map(x=><span key={x} className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-900">{x}</span>)}</div></div></section>

    <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6"><div><span className="font-black text-slate-900">CHAMBAAGO.COM</span><p className="mt-1 text-xs">Conecta · Trabaja · Gana</p></div><p className="text-xs">Red central de servicios para el hogar · Perú</p><p className="text-xs">Redes y canales oficiales: enlaces por configurar</p></div></footer>
  </main>
}
