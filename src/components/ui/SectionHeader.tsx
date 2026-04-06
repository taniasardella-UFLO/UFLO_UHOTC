import React from "react";

interface SectionHeaderProps {
  tagEs: string;
  tagEn: string;
  titleEs: string;
  titleEn: string;
  color: string;
  icon: React.ReactNode;
  field: string;
}

export default function SectionHeader({ tagEs, tagEn, titleEs, titleEn, color, icon, field }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-3">
        <span className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full" style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
          {tagEs} / {tagEn}
        </span>
        <span className="text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1" style={{ color, backgroundColor: `${color}10`, border: `1px solid ${color}20` }}>
          {icon} {field}
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
        {titleEs} <span className="text-slate-300 font-light">/</span> <span style={{ color }}>{titleEn}</span>
      </h2>
    </div>
  );
}
