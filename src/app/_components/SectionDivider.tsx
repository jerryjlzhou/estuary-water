export function SectionDivider({ light = false }: { light?: boolean }) {
  const lineColor = light ? "bg-white/20" : "bg-primary/15";
  const diamondColor = "bg-accent";

  return (
    <div className="flex items-center justify-center py-2">
      <div className={`h-px w-16 ${lineColor}`} />
      <div className={`mx-4 h-1.5 w-1.5 rotate-45 ${diamondColor}`} />
      <div className={`h-px w-16 ${lineColor}`} />
    </div>
  );
}
