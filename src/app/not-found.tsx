import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">
          404
        </h1>

        <h2 className="text-2xl font-semibold">
          Page Not Found
        </h2>

        <Link
          href="/dashboard"
          className="btn btn-primary"
        >
          Go Dashboard
        </Link>
      </div>
    </div>
  );
}