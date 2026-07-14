export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      {children}
    </main>
  );
}