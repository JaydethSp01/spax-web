export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/citas", label: "Citas" }, { href: "/clientes", label: "Clientes" }, { href: "/empleados", label: "Empleados" }, { href: "/paquetes", label: "Paquetes" }, { href: "/servicios", label: "Servicios" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Panel", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Panel">{children}</ProtectedShell>
      </body>
    </html>
  );
}
