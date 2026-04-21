import { ShieldCheck } from "lucide-react";

export default function ExpertBadge() {
  return (
    <div className="inline-flex items-center bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
      <ShieldCheck className="w-4 h-4 mr-1.5" />
      Expert Reviewed
    </div>
  );
}
