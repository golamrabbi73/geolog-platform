export default function UnauthorizedPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-error">
          403
        </h1>

        <h2 className="text-2xl font-semibold">
          Unauthorized
        </h2>

        <p className="text-base-content/70">
          You are not allowed to access this page.
        </p>
      </div>
    </div>
  );
}