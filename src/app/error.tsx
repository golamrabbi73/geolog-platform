"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-error">
          Something went wrong
        </h1>

        <button
          className="btn btn-primary"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}