import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1>Layout Auth</h1>
      {children}
    </div>
  );
}
