import React from 'react'
import { Bot, CheckCircle2, GitBranch, Users } from 'lucide-react'
import { portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

const iconMap = {
  'systems-design': GitBranch,
  'ai-automation': Bot,
  'project-leadership': Users,
}

export default function Competencies() {
  const { lang } = useLanguage()
  const section = portfolioContent[lang].competencies

  return (
    <section id="about" className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0D9488]">
            {section.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {section.subtitle}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.items.map((pillar) => {
            const Icon = iconMap[pillar.id] || GitBranch
            return (
              <article
                key={pillar.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC]/70 p-6 shadow-subtle transition-all hover:border-teal-300 hover:bg-white hover:shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-[#0D9488]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-400">
                      {pillar.code}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                    {pillar.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0D9488]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3.5 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {pillar.metricLabel}
                  </span>
                  <span className="text-xs font-semibold text-teal-700">
                    {pillar.metricValue}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
