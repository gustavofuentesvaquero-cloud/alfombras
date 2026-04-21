"use client";
import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function FactChecked() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-sand/30 rounded-md overflow-hidden mb-8 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-sand/5 hover:bg-sand/10 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sage/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-center text-sm font-medium text-foreground">
          <CheckCircle2 className="w-5 h-5 text-sage mr-2" />
          Fact-Checked by Editorial Team
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-foreground/50" /> : <ChevronDown className="w-4 h-4 text-foreground/50" />}
      </button>
      {isOpen && (
        <div className="p-4 border-t border-sand/20 text-sm text-foreground/80 bg-background/50 leading-relaxed">
          <p>
            This article was reviewed by a member of our editorial staff to ensure accuracy and alignment with our strict E-E-A-T guidelines. 
            We rely on primary sources, expert interviews, and high-quality market research to bring you the best rug recommendations.
          </p>
        </div>
      )}
    </div>
  );
}
