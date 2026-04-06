interface LangLabelProps {
  lang: "ES" | "EN";
  color: string;
}

export default function LangLabel({ lang, color }: LangLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs font-black tracking-[0.3em] uppercase" style={{ color }}>
        {lang === "ES" ? "🇦🇷 Español" : "🇺🇸 English"}
      </span>
      <div className="flex-1 h-[1px] bg-slate-200" />
    </div>
  );
}
