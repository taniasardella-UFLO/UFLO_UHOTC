import React from "react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  color: string;
}

export default function InfoCard({ icon: Icon, title, children, color }: InfoCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 hover:bg-white transition-all group shadow-sm hover:shadow-md" style={{ borderLeftWidth: 3, borderLeftColor: color }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-white/10" style={{ backgroundColor: `${color}15` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <h4 className="font-bold text-slate-900 text-base leading-tight">{title}</h4>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
