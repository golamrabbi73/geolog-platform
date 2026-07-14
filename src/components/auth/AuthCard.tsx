interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-base-content/70 mb-6">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
}