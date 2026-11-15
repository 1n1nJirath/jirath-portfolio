import React from 'react'
import {
  ArrowRight,
  Calendar,
  Compass,
  Leaf,
  Megaphone,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { portfolioContent } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

const achievementIcons = [Users, Compass, Megaphone]

export default function Leadership() {
  const { lang } = useLanguage()
  const leadership = portfolioContent[lang].leadership

  return (
    <section
      id="leadership"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0D9488]">
            {leadership.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            {leadership.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {leadership.subtitle}
          </p>
        </div>

        {/* Main Leadership Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-[#F8FAFC]/80 p-6 shadow-card sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-[#0D9488]">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {leadership.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-800">
                  {leadership.organization}
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-slate-700 shadow-subtle">
              <Calendar className="h-4 w-4 text-[#0D9488]" />
              <span>{leadership.period}</span>
            </div>
          </div>

          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {leadership.summary}
          </p>

          {/* Key Operational Achievements */}
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {leadership.achievements.map((item, idx) => {
              const Icon = achievementIcons[idx] || ShieldCheck
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-subtle"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-[#0D9488]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="mt-4 text-base font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Operational Governance -> PM/SA Skill Translation */}
          <div className="mt-7 rounded-xl border border-teal-200/80 bg-white p-5">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-700">
              {leadership.translationEyebrow}
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {leadership.pmTranslation.map((row) => (
                <div
                  key={row.skill}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5"
                >
                  <p className="text-xs font-bold text-slate-900">{row.skill}</p>
                  <p className="mt-1.5 flex items-start gap-1.5 text-xs leading-relaxed text-slate-600">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0D9488]" />
                    <span>{row.mapping}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
