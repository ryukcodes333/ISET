import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0E0E0E]">
      <div className="w-full max-w-md mx-4 rounded-lg border border-white/10 bg-white/5 p-8">
        <div className="flex mb-4 gap-3 items-center">
          <AlertCircle className="h-8 w-8 text-[#C9A227]" />
          <h1 className="text-2xl font-bold text-white">404 — Page Not Found</h1>
        </div>
        <p className="text-sm text-white/60">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
