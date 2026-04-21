interface AdUnitProps {
  type?: 'inline' | 'sidebar' | 'sticky-bottom';
}

export default function AdUnit({ type = 'inline' }: AdUnitProps) {
  const baseClasses = "flex items-center justify-center bg-sand/10 border border-sand/30 text-background/50 font-mono text-sm";
  
  if (type === 'sidebar') {
    return (
      <div className={`${baseClasses} w-full aspect-[300/600] my-6 lg:my-0`}>
        Ad-Placeholder (300x600)
      </div>
    );
  }

  if (type === 'sticky-bottom') {
    return (
      <div className={`${baseClasses} fixed bottom-0 left-0 right-0 h-16 sm:h-[90px] z-40 bg-background/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]`}>
        Ad-Placeholder (Sticky Mobile)
      </div>
    );
  }

  return (
    <div className={`${baseClasses} w-full h-[250px] my-8 rounded`}>
      Ad-Placeholder (Responsive Inline)
    </div>
  );
}
