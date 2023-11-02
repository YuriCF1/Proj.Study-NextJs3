import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: 'Aplicação Exmeplo',
    template: '%s | App'
  }
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <h1>Layout App</h1>
      {children}
    </div>
  );
}
