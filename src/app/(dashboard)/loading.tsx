export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-100">
      <div className="relative flex items-center justify-center">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-base-content/40 animate-pulse">
        Initializing GeoLog
      </p>
    </div>
  );
}